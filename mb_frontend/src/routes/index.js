import HomeLayout from "../layout/home";
import { authRoutes } from "./auth";
import { chatRoutes } from "./chat";
import { homeRoutes } from "./landing";

import { createBrowserRouter } from "react-router-dom";

export const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <p>
        Available routes at the moment are: /chat , /auth/signin and
        /auth/signup
      </p>
    ),
    children: authRoutes,
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: homeRoutes,
  },
  {
    path: "/auth",
    element: <HomeLayout />,
    children: authRoutes,
  },
  {
    path: "/chat",
    element: <HomeLayout />,
    children: chatRoutes,
  },
]);
