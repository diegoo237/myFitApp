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
  const [userlog, setUserlog] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<NotFoundPage />} />

        {userlog ? (
          <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="work" element={<Work />} />
            <Route path="diet" element={<Diet />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Enter />} />
            <Route path="login" element={<Login setUserlog={setUserlog} />} />
            <Route
              path="register"
              element={<Register setUserlog={setUserlog} />}
            />
          </>
        )}
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
