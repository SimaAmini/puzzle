import create from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_STORAGE } from '@constants';

export const authStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      token: undefined,
      user: {},

      setUser: (user) =>
        set(
          produce((state) => {
            state.user.id = user.id;
            state.user.username = user.username;
            state.user.email = user.email;
          }),
        ),
      getUser: () => get().user,
      removeUser: () =>
        set(
          produce((state) => {
            state.user = {};
          }),
        ),

      setToken: (token) =>
        set(
          produce((state) => {
            state.token = token;
          }),
        ),
      removeToken: () =>
        set(
          produce((state) => {
            state.token = undefined;
          }),
        ),
      getToken: () => get().token,
    }),
    {
      name: AUTH_STORAGE,
      getStorage: () => AsyncStorage,
    },
  ),
);
