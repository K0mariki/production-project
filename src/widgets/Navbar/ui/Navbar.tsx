import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.navbar__inner, {}, ["container"])}>
        <AppLink to="/">{t("MainLink")}</AppLink>
        <AppLink to="/about">{t("AboutLink")}</AppLink>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
