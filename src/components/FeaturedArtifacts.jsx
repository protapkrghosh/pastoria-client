import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
   const [artifacts, setArtifacts] = useState([]);

   useEffect(() => {
      axios
         .get(`${import.meta.env.VITE_URL}/liked-artifacts`)
         .then((res) => {
            console.log(res.data);
            setArtifacts(res.data);
         })
         .catch((err) => {
            console.error("Error fetching featured artifacts:", err);
         });
   }, []);

   return (
      <div>
         <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
               🌟 Featured Artifacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {artifacts.map((artifact) => (
                  <div
                     key={artifact._id}
                     className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition"
                  >
                     <img
                        src={artifact.imageURL}
                        alt={artifact.artifactName}
                        className="h-52 w-full object-cover"
                     />
                     <div className="p-4">
                        <h3 className="text-xl font-semibold">
                           {artifact.artifactName}
                        </h3>
                        <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                           {artifact.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                           <span className="text-blue-600 font-medium">
                              ❤️ {artifact.likedBy?.length || 0}
                           </span>
                           <Link
                              to={`/artifact/${artifact._id}`}
                              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                           >
                              View Details
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-10">
               <Link
                  to="/all-artifacts"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition"
               >
                  See All Artifacts
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FeaturedArtifacts;
