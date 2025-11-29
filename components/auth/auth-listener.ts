'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { useRouter } from 'next/navigation';

export function AuthListener() {
  const { user } = useAuthStore();
  const router = useRouter();

//   useEffect(() => {
//     if(!user) {
//         router.push('/login');
//     }
//   }, [user, router]);

  return null;
}