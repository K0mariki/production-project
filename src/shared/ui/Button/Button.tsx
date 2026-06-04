import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const ButtonTheme = {
  CLEAR: "clear",
} as const;

type ButtonThemeType = typeof ButtonTheme[keyof typeof ButtonTheme];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ButtonThemeType
}

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}