import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import create from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';

import { THEME } from '@constants';

const lightColors = {
  primary: '#1C6758',
  secondary: '#4ecdc4',
  black: '#000000',
  white: '#fff',
  medium: '#6e6969',
  light: '#f8f4f4',
  dark: '#100f0f',
  danger: '#ff5252',
  gray: '#F2F2F2',
};

const darkColors = {
  primary: '#1C6758',
  secondary: '#724ecd',
  white: '#000000c9',
  black: '#fff',
  medium: '#6e6969',
  dark: '#f8f4f4',
  light: '#0b0909c6',
  danger: '#ff5252',
  gray: '#adb5ad',
};

export const themeStore = create(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        isDark: false,
        colors: lightColors,

        setTheme: (isDark) => {
          return set(
            produce((state) => {
              state.isDark = isDark;
              state.colors = isDark ? darkColors : lightColors;
            }),
          );
        },

        getTheme: () => get().isDark,
        getColors: () => get().colors,
      }),
      {
        name: THEME,
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);
