import { createBrowserRouter } from "react-router-dom";
import Abouts from "../Components/Abouts/Abouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "abouts",
        element: <Abouts></Abouts>,
      },
    ],
  },
]);

export default router;
