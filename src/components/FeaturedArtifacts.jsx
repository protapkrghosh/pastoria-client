import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import ArtifactCard from "./ArtifactCard";
import arrow from "../assets/section-header-seprator.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const FeaturedArtifacts = () => {
   const { loading } = useContext(AuthContext);
   const [likedArtifacts, setLikedArtifacts] = useState([]);

   useEffect(() => {
      axios
         .get(`${import.meta.env.VITE_URL}/liked-artifacts`)
         .then((res) => {
            setLikedArtifacts(res.data);
         })
         .catch((err) => {
            console.error("Error fetching featured artifacts:", err);
         });
   }, []);

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-[50dvh]">
            {/* Loading Animation */}
            <img
               src="https://bookly-theme.myshopify.com/cdn/shop/files/icons8-literature_1.gif?v=1679027144&width=1920"
               alt=""
            />
         </div>
      );
   }

   return (
      <div className="bg-base-200 container mx-auto px-3 sm:px-10 md:px-6 lg:px-12 py-12 md:pt-16">
         <div className="mb-12">
            <h2 className="rancho text-black/90 text-center text-5xl font-bold tracking-wider mb-3">
               Featured Artifacts
            </h2>

            <img src={arrow} alt="" className="mx-auto" />
         </div>

         {/* Featured Artifact Cards */}
         <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {likedArtifacts.map((artifact) => (
                  <ArtifactCard key={artifact?._id} artifact={artifact} />
               ))}
            </div>

            <div className="text-center py-12">
               <Link
                  to="/all-artifacts"
                  className="btn btn-primary btnHover text-white rounded-none"
               >
                  See All Artifacts
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FeaturedArtifacts;
