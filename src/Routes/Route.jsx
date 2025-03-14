import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Travel from "../Pages/Travel/Travel";
import Entertainment from "../Pages/Entertainment/Entertainment";
import Error from "../Pages/Error/Error";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <About />,
      },
      {
        path: "/register",
        element: <About />,
      },
      {
        path: "/travel",
        element: <Travel />,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/entertainment",
        element: <Entertainment></Entertainment>,
      },
    ],
  },
]);

export default Route;
