import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { FaHeart, FaRegSadTear } from "react-icons/fa";

const LikedArtifacts = () => {
   const data = useLoaderData();
   const { user } = useContext(AuthContext);

   const likedArtifacts = data?.data.filter((artifact) =>
      artifact?.likedBy?.includes(user?.email)
   );

   return (
      <div className="bg-base-200 py-14">
         <Helmet>
            <title>Liked Artifacts — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12">
            <h2 className="rancho text-secondary text-center text-5xl font-bold tracking-wider opacity-60 mb-10">
               Your Liked Artifacts
            </h2>

            {likedArtifacts.length === 0 ? (
               <div className="flex flex-col items-center justify-center text-center mt-28">
                  <FaRegSadTear className="text-5xl text-gray-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-700">
                     No Liked Artifacts Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                     You haven’t expressed love for history yet!
                  </p>
               </div>
            ) : (
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {likedArtifacts.map((artifact) => (
                     <div
                        key={artifact._id}
                        className="relative bg-white/70 shadow-xl border border-slate-200 rounded-3xl overflow-hidden group"
                     >
                        {/* Image */}
                        <img
                           src={artifact?.imageURL}
                           alt={artifact?.artifactName}
                           className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <Link
                              to={`/artifact/${artifact._id}`}
                              className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-slate-100 shadow-md transition"
                           >
                              View Details
                           </Link>
                        </div>

                        {/* Info */}
                        <div className="p-5 space-y-2">
                           <div className="flex items-center gap-2 pt-1">
                              <FaHeart className="text-red-500 text-sm" />
                              <span className="text-sm text-slate-600">
                                 {artifact.likedBy?.length || 0} Likes
                              </span>
                           </div>
                           <h3 className="text-md font-semibold text-slate-800 truncate">
                              {artifact?.artifactName}
                           </h3>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default LikedArtifacts;
