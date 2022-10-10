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
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "abouts",
        element: <Abouts></Abouts>,
      },
    ],
  },
]);

export default router;
