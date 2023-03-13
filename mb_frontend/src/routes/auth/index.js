import RegisterPage from "../../pages/auth/register";
import LoginPage from "../../pages/auth/login";

export const authRoutes = [
  { path: "register", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
];
