import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Dashboard from "../Components/Dashboard/Dashboard";
import ErrorPage from "../Components/ErroorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);