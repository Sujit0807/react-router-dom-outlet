import { RouteObject } from "react-router-dom";
import dashboardRoutes from "./dashboardRoutes";
import fallbackRoutes from "./fallbackRoutes";

const routes: RouteObject[] = [...dashboardRoutes, ...fallbackRoutes];

export default routes;
