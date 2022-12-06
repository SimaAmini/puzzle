import { authStore } from './auth-store';

export const useAuth = () => {
  const store = authStore();

  return {
    setUser: store.setUser,
    getUser: store.getUser,
    removeUser: store.removeUser,

    getToken: store.getToken,
    setToken: store.setToken,
    removeToken: store.removeToken,
  };
};
