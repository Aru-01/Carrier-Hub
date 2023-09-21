import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

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
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
