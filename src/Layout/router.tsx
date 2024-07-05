import { createBrowserRouter } from "react-router-dom";
import People from "../Pages/People/People";
import Layout from "./Layout";
import Person from "../Pages/Person/Person";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "people",
        element: <People />,
      },
      {
        path: "person/:id",
        element: <Person />,
      },
    ],
  },
]);
