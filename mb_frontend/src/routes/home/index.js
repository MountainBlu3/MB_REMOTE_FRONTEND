import RegisterPage from "../../pages/home/register";
import LoginPage from "../../pages/home/login";

export const homeRoutes = [
  { path: "", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
];
