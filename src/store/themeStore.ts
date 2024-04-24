import { create } from 'zustand';
import type { ThemeType } from '../utils/designTokens/designTokens.types';
import { LightTheme } from '../utils/designTokens';

interface ThemeState {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: LightTheme,
  changeTheme: (theme: ThemeType) => {
    return set(() => ({ theme } as ThemeState));
  },
}));
