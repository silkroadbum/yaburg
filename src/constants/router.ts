export enum AppRoutes {
  HOME = "home",
  LOGIN = "login",
  REGISTER = "register",
  FORGOT_PASSWORD = "forgot_password",
  RESET_PASSWORD = "reset_password",
  PROFILE = "profile",
  INGREDIENTS = "ingredients",
  FEED = "feed",
  ORDERS = "orders",
  PROFILE_ORDERS = "profile_orders",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.FORGOT_PASSWORD]: "/forgot-password",
  [AppRoutes.RESET_PASSWORD]: "/reset-password",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.PROFILE_ORDERS]: "/profile/orders",
  [AppRoutes.INGREDIENTS]: "/ingredients",
  [AppRoutes.FEED]: "/feed",
  [AppRoutes.ORDERS]: "orders",
  [AppRoutes.NOT_FOUND]: "*"
};
