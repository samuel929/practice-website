import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Layout/router.tsx";
import ScrollToTop from "./hooks/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ScrollToTop />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
