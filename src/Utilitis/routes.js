import { createBrowserRouter } from "react-router-dom";
import Abouts from "../Components/Abouts/Abouts";
import Blogs from "../Components/Blogs/Blogs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import QuizDetails from "../Components/QuizDetails/QuizDetails";
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
        path: "/quiz/:quizId",
        element: <QuizDetails></QuizDetails>,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          );
        },
      },
      {
        path: "abouts",
        element: <Abouts></Abouts>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
