import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PageNotFound from "../components/PageNotFound";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { FidgetSpinner } from "react-loader-spinner";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      hydrateFallbackElement: (
         <div className="flex justify-center items-center min-h-[50dvh]">
            <FidgetSpinner
               visible={true}
               height="100"
               width="100"
               ariaLabel="fidget-spinner-loading"
               wrapperStyle={{}}
               wrapperClass="fidget-spinner-wrapper"
               backgroundColor="#3caa9f"
            />
         </div>
      ),
      children: [
         { index: true, Component: Home },
         { path: "signin", Component: SignIn },
         { path: "signup", Component: SignUp },
      ],
   },
   {
      path: "*",
      Component: PageNotFound,
   },
]);
