import { create } from 'zustand';
import { FarmerProfile } from '@/types/auth.types';

interface AuthState {
  user: FarmerProfile | null;
  isLoading: boolean;

  // Actions
  setUser: (user: FarmerProfile | null) => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true, // Initial loading state

  // This single method handles both Login (pass object) and Logout (pass null)
  setUser: (user) => set({ user, isLoading: false }),
  
  // Useful if you need to manually trigger loading state during transitions
  setLoading: (isLoading) => set({ isLoading }),
}));