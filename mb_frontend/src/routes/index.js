import HomeLayout from "../layout/home";
import { homeRoutes } from "./home";
import { createBrowserRouter } from "react-router-dom";

export const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeRoutes,
  },
]);
