import React from "react";
import { Link } from "react-router";
import image from '../assets/404.png'

const PageNotFound = () => {
   return (
      <div className="min-h-screen text-center py-20">
         <img src={image} alt="Image" className="w-10/12 mx-auto mb-10" />
         <h1 className="text-6xl font-bold tracking-wider rancho capitalize">
            OOPS! the page was not found
         </h1>
         <p className="md:w-[50%] mx-auto my-9">
            The page you are looking for does not exist. It might have
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
