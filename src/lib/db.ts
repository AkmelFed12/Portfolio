import 'server-only';
import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;

export const isDbEnabled =
  typeof databaseUrl === 'string' &&
  (databaseUrl.startsWith('postgres://') ||
    databaseUrl.startsWith('postgresql://'));

export const db = isDbEnabled && databaseUrl ? neon(databaseUrl) : null;
