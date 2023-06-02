import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Dashboard from "../Components/Dashboard/Dashboard";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);