import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Route";
import AuthProvider from "./Context/AuthProvider";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <HelmetProvider>
         <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
         </AuthProvider>
      </HelmetProvider>
   </StrictMode>
);
