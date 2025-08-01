import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "../pages/Signup";
import  {Home}  from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRouter>
        <Signup />
      </PublicRouter>
    ),
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
