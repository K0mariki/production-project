import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.navbar__inner, {}, ["container"])}>
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
