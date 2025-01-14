import React from "react";
import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/nav/Header";
import Dashboard from "./pages/Dashboard";
import Diet from "./pages/Diet";
import Work from "./pages/Work";
import Enter from "./pages/Enter";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [token, setToken] = useState();
  const routes = token
    ? createRoutesFromElements(
        <>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Header setToken={setToken} />}>
            <Route index element={<Dashboard />} />
            <Route path="work" element={<Work />} />
            <Route path="diet" element={<Diet />} />
          </Route>
        </>
      )
    : createRoutesFromElements(
        <>
          <Route path="/" element={<Enter />} />
          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="register" element={<Register setToken={setToken} />} />
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
