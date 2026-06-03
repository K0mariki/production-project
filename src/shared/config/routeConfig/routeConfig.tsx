import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export const AppRoutes = {
  MAIN: "main",
  ABOUT: "about",
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutesType, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutesType, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
