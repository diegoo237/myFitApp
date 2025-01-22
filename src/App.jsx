import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Diet from "./pages/Diet";
import Work from "./pages/Work";
import Enter from "./pages/Enter";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFoundPage from "./pages/NotFoundPage";
import UserSettings from "./pages/UserSettings";
import Layout from "./Layout";
import SideBar from "./components/nav/SideBar";

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
        <Route index element={<Dashboard />} />
        <Route path="work" element={<Work />} />
        <Route path="diet" element={<Diet />} />
        <Route path="user" element={<UserSettings />} />
      </Route>
    </>
  );

  const unauthenticatedRoutes = (
    <>
      <Route path="/" element={<Enter />} />
      <Route path="login" element={<Login setToken={handleSetToken} />} />
      <Route path="register" element={<Register setToken={handleSetToken} />} />
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
