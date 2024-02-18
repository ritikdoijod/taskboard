import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/app/home/page";
import SignUp from "@/app/auth/sign-up/page";
import Login from "@/app/auth/login/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
const App = () => {
  return (
    <div id="app" className="w-full h-full bg-[#f8f9fa]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
