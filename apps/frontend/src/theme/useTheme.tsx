import { create } from 'zustand';

const themes = {
  data: {
    light: {
      name: 'light',
      colors: {
        body: '#FFFFFF',
        text: '#37383C',
        switch: '#37383C',
        svg_color:
          'brightness(0%)',
        button: {
          text: '#37383C',
        },
      },
    },
    dark: {
      name: 'dark',
      colors: {
        body: '#37383C',
        text: '#fff',
        switch: '#fff',
        svg_color: 'brightness(0%) invert(1)',
        button: {
          text: '#fff',
        },
      },
    },
  },
};

export interface ITheme {
  name: string;
  colors: {
    body: string;
    text: string;
    switch: string;
    svg_color: string;
    button: {
      text: string;
    };
  };
}

type themesEnum = 'light' | 'dark';

interface ThemeState {
  theme: ITheme;
  setTheme: (theme: themesEnum) => void;
}

export const useTheme = create<ThemeState>()((set) => ({
  theme: themes.data[(localStorage.getItem('theme') as themesEnum) ?? 'light'],
  setTheme: (themeName: themesEnum) => {
    localStorage.setItem('theme', themeName);
    return set((state) => ({ ...state, theme: themes.data[themeName] }));
  },
}));
