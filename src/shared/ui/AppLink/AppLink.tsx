import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import cls from './AppLink.module.scss';

export const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

type AppLinkThemeType = typeof AppLinkTheme[keyof typeof AppLinkTheme]

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkThemeType;
}

export function AppLink(props: AppLinkProps) {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...othersProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [cls[theme], className])}
      {...othersProps}
    >
      {children}
    </Link>
  );
}
