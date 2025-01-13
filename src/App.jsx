import React from "react";
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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="work" element={<Work />} />
          <Route path="diet" element={<Diet />} />
        </Route>
        <Route path="enter" element={<Enter />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
