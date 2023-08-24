import HomeLayout from "../components/layout";
import { IRoutesDetails } from "../interfaces/routeInterface";
import ForgotPasswordPage from "../pages/forgot-password";
import LandingPage from "../pages/landing";
import LoginPage from "../pages/login";
import ProductsListingPage from "../pages/products";
import ResetPasswordPage from "../pages/reset-password";
import IndexRoute from "../routes/indexRoute";

export const ROUTE_CONSTANTS = {
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  HOME: "/",
  LANDING: "/",
  PRODUCTS_LISTING: "/products",
};

export const RouteDetails: IRoutesDetails[] = [
  {
    path: "*",
    component: IndexRoute,
    isProtected: false,
  },
  {
    path: "*",
    component: IndexRoute,
    isProtected: true,
  },
  {
    path: ROUTE_CONSTANTS.LOGIN,
    component: LoginPage,
    isProtected: false,
  },
  {
    path: ROUTE_CONSTANTS.FORGOT_PASSWORD,
    component: ForgotPasswordPage,
    isProtected: false,
  },
  {
    path: ROUTE_CONSTANTS.RESET_PASSWORD,
    component: ResetPasswordPage,
    isProtected: false,
  },
  {
    path: "/",
    component: HomeLayout,
    isProtected: false,
    children: [
      {
        path: ROUTE_CONSTANTS.HOME,
        component: LandingPage,
      },
      {
        path: ROUTE_CONSTANTS.PRODUCTS_LISTING,
        component: ProductsListingPage,
      },
    ],
  },
];
