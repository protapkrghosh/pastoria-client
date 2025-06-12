import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PageNotFound from "../components/PageNotFound";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddArtifact from "../Pages/AddArtifact";
import PrivateRoute from "./PrivateRoute";
import AllArtifacts from "../Pages/AllArtifacts";
import axios from "axios";
import ArtifactDetails from "../Pages/ArtifactDetails";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      hydrateFallbackElement: (
         <div className="flex justify-center items-center min-h-[50dvh]">
            {/* Loading Animation */}
            <img
               src="https://bookly-theme.myshopify.com/cdn/shop/files/icons8-literature_1.gif?v=1679027144&width=1920"
               alt=""
            />
         </div>
      ),
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "signin",
            Component: SignIn,
         },
         {
            path: "signup",
            Component: SignUp,
         },
         {
            path: "add-artifact",
            element: (
               <PrivateRoute>
                  <AddArtifact />,
               </PrivateRoute>
            ),
         },
         {
            path: "all-artifacts",
            Component: AllArtifacts,
            loader: () => axios.get(`${import.meta.env.VITE_URL}/artifacts`),
         },
         {
            path: "artifact/:id",
            element: (
               <PrivateRoute>
                  <ArtifactDetails />
               </PrivateRoute>
            ),
            loader: () => axios.get(`${import.meta.env.VITE_URL}/artifacts`),
         },
      ],
   },
   {
      path: "*",
      Component: PageNotFound,
   },
]);
