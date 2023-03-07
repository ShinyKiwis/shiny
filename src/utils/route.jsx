import { Home, Login, PageNotFound } from "../pages";

export const protectedRoutes = [{ path: "/", element: <Home /> }];

export const routes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
];
