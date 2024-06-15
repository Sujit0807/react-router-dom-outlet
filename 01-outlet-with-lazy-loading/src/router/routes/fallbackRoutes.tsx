import { type RouteObject } from "react-router-dom";
import HeaderLayout from "../../components/HeaderLayout";
import NotFound from "../../pages/NotFound";
import AccessDenied from "../../pages/AccessDenied";

const fallbackRoutes: RouteObject[] = [
  {
    path: "",
    element: <HeaderLayout headerName="" />,
    children: [
      { path: "/403", element: <AccessDenied /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default fallbackRoutes;
