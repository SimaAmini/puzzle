import { themeStore } from './theme-store';

export const useTheme = () => {
  const store = themeStore();

  return {
    setTheme: store.setTheme,
    getTheme: store.getTheme,
    getColors: store.getColors,

    colors: store.colors,
  };
};
