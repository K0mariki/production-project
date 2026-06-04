import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import MoonIcon from "shared/assets/icons/moon-solid.svg";
import SunIcon from "shared/assets/icons/sun-solid.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
      {theme === Theme.LIGHT ? <MoonIcon width={24} height={24} /> : <SunIcon width={24} height={24} />}
    </button>
  )
}
