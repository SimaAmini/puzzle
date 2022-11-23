import create from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  authenticate: () => set((state) => ({ isAuthenticated: true })),
  logout: () => set({ isAuthenticated: true }),
}));
