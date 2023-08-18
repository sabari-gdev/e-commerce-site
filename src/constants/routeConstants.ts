import { IRoutesDetails } from "../interfaces/routeInterface";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import IndexRoute from "../routes/indexRoute";

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
    path: "/login",
    component: LoginPage,
    isProtected: false,
  },
  {
    path: "/",
    component: HomePage,
    isProtected: true,
  },
];
