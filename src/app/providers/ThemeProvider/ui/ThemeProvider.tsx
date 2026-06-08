import { ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeType, ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType
  || Theme.LIGHT;

interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}
