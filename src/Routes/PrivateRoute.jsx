import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-dvh">
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
      );
   }

   if (!user) {
      return <Navigate to={"/signin"} state={location?.pathname} />;
   }

   return children;
};

export default PrivateRoute;
