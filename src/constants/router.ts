export enum AppRoutes {
  HOME = "home",
  LOGIN = "login",
  REGISTER = "register",
  FORGOT_PASSWORD = "forgot_password",
  RESET_PASSWORD = "reset_password",
  PROFILE = "profile",
  INGREDIENTS = "ingredients",
  FEED = "feed",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.FORGOT_PASSWORD]: "/forgot-password",
  [AppRoutes.RESET_PASSWORD]: "/reset-password",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.INGREDIENTS]: "/ingredients",
  [AppRoutes.FEED]: "/feed",
  [AppRoutes.NOT_FOUND]: "*"
};
