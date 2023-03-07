import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { routes, protectedRoutes } from "./utils/route";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {protectedRoutes.map((protectedRoute) => (
              <Route
                key={protectedRoute.path}
                path={protectedRoute.path}
                element={protectedRoute.element}
              />
            ))}
          </Route>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
