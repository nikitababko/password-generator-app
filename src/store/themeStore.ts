import { create } from 'zustand';
import type { DarkTheme } from '../constants';
import { LightTheme } from '../constants';

interface ThemeState {
  theme: typeof LightTheme | typeof DarkTheme;
  changeTheme: (
    theme: typeof LightTheme | typeof DarkTheme,
  ) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: LightTheme,
  changeTheme: (
    theme: typeof LightTheme | typeof DarkTheme,
  ) => {
    return set(() => ({ theme } as ThemeState));
  },
}));
