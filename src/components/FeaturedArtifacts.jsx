import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import ArtifactCard from "./ArtifactCard";
import arrow from "../assets/section-header-seprator.png";

const FeaturedArtifacts = () => {
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

   return (
      <div>
         <div className="bg-base-200 container mx-auto px-3 sm:px-10 md:px-6 lg:px-12 py-12 md:pt-16">
            <div className="mb-10">
               <h2 className="rancho text-secondary text-center text-5xl font-bold tracking-wider opacity-60 mb-5">
                  Featured Artifacts
               </h2>

               <img src={arrow} alt="" className="mx-auto" />
            </div>

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
      </div>
   );
};

export default FeaturedArtifacts;
