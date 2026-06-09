import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.navbarInner, {}, ['container'])}>
        <AppLink to="/">{t('MainLink')}</AppLink>
        <AppLink to="/about">{t('AboutLink')}</AppLink>
      </div>
    </nav>
  );
}
