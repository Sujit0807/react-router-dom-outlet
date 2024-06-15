import { lazy } from "react";
import { type RouteObject } from "react-router-dom";

import HeaderLayout from "../../components/HeaderLayout";
const UsersPage = lazy(() => import("../../pages/UsersPage"));
const CommentsPage = lazy(() => import("../../pages/CommentsPage"));
const NavigationButtons = lazy(
  () => import("../../components/NavigationButtons")
);

const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HeaderLayout headerName="" />,
    children: [
      { path: "/", element: <NavigationButtons /> },
      { path: "/dashboard/users", element: <UsersPage /> },
      { path: "/dashboard/comments", element: <CommentsPage /> },
    ],
  },
];

export default dashboardRoutes;
