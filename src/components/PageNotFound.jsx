import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
   return (
      <div className="min-h-screen text-center mt-32">
         <h1 className="text-6xl font-bold tracking-wider rancho capitalize">404 • Page not found</h1>
         <p className="md:w-[50%] mx-auto my-9">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted. Try a search below...
         </p>

         <Link
            to={"/"}
            className="btn btn-outline rounded-none hover:bg-black hover:text-white duration-300"
         >
            Back To Home
         </Link>
      </div>
   );
};

export default PageNotFound;
