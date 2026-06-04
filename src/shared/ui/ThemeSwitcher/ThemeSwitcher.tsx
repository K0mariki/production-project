import { useTheme, Theme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import MoonIcon from "shared/assets/icons/moon-solid.svg";
import SunIcon from "shared/assets/icons/sun-solid.svg";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "shared/ui/LanguageSwitcher/LanguageSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({className}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT
        ? <MoonIcon color="var(--bg-color)" width={24} height={24} />
        : <SunIcon color="var(--bg-color)" width={24} height={24} />
      }
    </Button>
  )
}
