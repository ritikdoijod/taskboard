import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/app/home/page";
import Login from "@/app/auth/login/page";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../state/store.js";
import Dashboard from "./dashboard/index.js";

const App = () => {
  const token = useSelector((state: RootState) => state.token);
  // const user = useSelector((state: RootState) => state.user);

  const router = useMemo(() => {
    const routes = token
      ? [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ]
      : [
          {
            path: "/login",
            element: <Login />,
          },
        ];

    return createBrowserRouter(routes);
  }, [token]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="app" className="w-full h-full bg">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
