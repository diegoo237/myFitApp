import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DietPage from "./pages/DietPage";
import WorkPage from "./pages/WorkPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import Layout from "./Layout";

const getStoredToken = () => localStorage.getItem("token");
const saveToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

function App() {
  const [token, setToken] = useState(getStoredToken());

  const handleSetToken = (newToken) => {
    setToken(newToken);
    saveToken(newToken);
  };

  const authenticatedRoutes = (
    <>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Layout setToken={handleSetToken} />}>
        <Route index element={<DashboardPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="diet" element={<DietPage />} />
        <Route path="user" element={<UserSettingsPage />} />
      </Route>
    </>
  );

  const unauthenticatedRoutes = (
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage setToken={handleSetToken} />} />
      <Route
        path="register"
        element={<RegisterPage setToken={handleSetToken} />}
      />
    </>
  );

  const routes = createRoutesFromElements(
    <>
      {token ? authenticatedRoutes : unauthenticatedRoutes}
      <Route path="*" element={<NotFoundPage />} />
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
