import 'server-only';

import crypto from 'node:crypto';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'portfolio_admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 12;

function getAuthConfig() {
  const password = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  const isConfigured =
    typeof password === 'string' &&
    password.length > 0 &&
    typeof sessionSecret === 'string' &&
    sessionSecret.length >= 16;

  return { isConfigured, password, sessionSecret };
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

function sign(payload: string, secret: string) {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

async function createSessionToken(secret: string) {
  const now = Date.now().toString();
  const nonce = crypto.randomBytes(16).toString('hex');
  const payload = `${now}.${nonce}`;
  const signature = sign(payload, secret);
  return `${payload}.${signature}`;
}

function verifySessionToken(token: string, secret: string) {
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  const payload = `${parts[0]}.${parts[1]}`;
  const signature = parts[2] as string;
  const expected = sign(payload, secret);
  return safeEqual(signature, expected);
}

export function isAdminAuthConfigured() {
  return getAuthConfig().isConfigured;
}

export async function loginAdmin(passwordInput: string) {
  const config = getAuthConfig();
  if (!config.isConfigured || !config.password || !config.sessionSecret) {
    return false;
  }

  if (!safeEqual(passwordInput, config.password)) {
    return false;
  }

  const token = await createSessionToken(config.sessionSecret);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_DURATION_SECONDS,
    path: '/',
  });

  return true;
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const config = getAuthConfig();
  if (!config.isConfigured || !config.sessionSecret) {
    return false;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) {
    return false;
  }

  return verifySessionToken(token, config.sessionSecret);
}

