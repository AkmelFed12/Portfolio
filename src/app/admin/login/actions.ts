'use server';

import { redirect } from 'next/navigation';
import { isAdminAuthConfigured, loginAdmin, logoutAdmin } from '@/lib/admin-auth';

export async function loginAdminAction(formData: FormData) {
  if (!isAdminAuthConfigured()) {
    redirect('/admin/login?error=config');
  }

  const password = String(formData.get('password') || '');
  const ok = await loginAdmin(password);

  if (!ok) {
    redirect('/admin/login?error=invalid');
  }

  redirect('/admin');
}

export async function logoutAdminAction() {
  await logoutAdmin();
  redirect('/admin/login');
}

