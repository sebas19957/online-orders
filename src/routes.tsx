import { Navigate, useRoutes } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import GeneralLayout from "./layout/GeneralLayout";
import ResponseLayout from "./layout/ResponseLayout";

import NotFoundPage from "./pages/NotFound";

import DashboardPage from "./pages/Dashboard";
import AuthPage from "./pages/Auth";
import OrderPage from "./pages/Order";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: "login", element: <AuthPage /> },
      ],
    },
    {
      path: "/app",
      element: <GeneralLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" />, index: true },
        { path: "dashboard", element: <DashboardPage /> },
        { path: "orders", element: <OrderPage /> },
      ],
    },
    {
      element: <ResponseLayout />,
      children: [
        { path: "404", element: <NotFoundPage /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
