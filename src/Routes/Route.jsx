import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PageNotFound from "../components/PageNotFound";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { ThreeCircles } from "react-loader-spinner";
import AddArtifact from "../Pages/AddArtifact";
import PrivateRoute from "./PrivateRoute";
import AllArtifacts from "../Pages/AllArtifacts";
import axios from "axios";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      hydrateFallbackElement: (
         <div className="flex justify-center items-center min-h-[50dvh]">
            <ThreeCircles
               visible={true}
               height="100"
               width="100"
               color="#e2b13c"
               ariaLabel="three-circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
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
      ],
   },
   {
      path: "*",
      Component: PageNotFound,
   },
]);
