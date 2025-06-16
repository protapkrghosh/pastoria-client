import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-dvh">
            {/* Loading Animation */}
            <img
               src="https://bookly-theme.myshopify.com/cdn/shop/files/icons8-literature_1.gif?v=1679027144&width=1920"
               alt=""
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
