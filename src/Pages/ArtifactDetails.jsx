import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { BiLike } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const ArtifactDetails = () => {
   const { user } = useContext(AuthContext);
   const { id } = useParams();
   const data = useLoaderData();
   const artifact = data.data.find((art) => art._id === id);
   console.log(artifact);

   return (
      <div>
         <Helmet>
            <title>Details — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12 bg-base-200">
            <div className="bg-white shadow rounded-lg max-w-3xl mx-auto overflow-hidden py-4 md:pt-6 md:pb-10">
               {/* Top Row */}
               <div className="flex flex-col-reverse md:flex-row justify-between items-start px-4 md:px-6 pb-4">
                  <h2 className="text-[22px] md:text-2xl font-bold text-black yesevaOne tracking-wider mb-1 mt-5 md:mt-0">
                     {artifact?.artifactName}
                  </h2>

                  <div className="md:text-end">
                     <p className="text-slate-400">Posted By</p>
                     <h4 className="text-slate-600 font-semibold capitalize">
                        {artifact?.userName}
                     </h4>
                     <p className="text-sm text-slate-500">
                        {artifact?.userEmail}
                     </p>
                  </div>
               </div>

               {/* Divider */}
               <div className="border-t border-gray-200" />

               {/* Description Section */}
               <div className="px-5 md:px-6 py-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                     Description
                  </h3>

                  <Fade delay={1e2} cascade damping={1e-1}>
                     <p className="text-accent leading-relaxed">
                        {artifact?.description}
                     </p>
                  </Fade>

                  <div className="mt-8">
                     <h5 className="font-semibold mb-2">Reaction:</h5>

                     <div className="flex items-center gap-3">
                        {user?.email === artifact?.uerEmail ? (
                           <BiLike
                              size={24}
                              className="text-primary cursor-no-drop"
                           />
                        ) : (
                           <BiLike
                              onClick={() => setLikeCount(likeCount + 1)}
                              size={24}
                              className={`text-primary ${
                                 user?.email === artifact?.uerEmail
                                    ? "cursor-no-drop"
                                    : "cursor-pointer"
                              }`}
                           />
                        )}

                        <div className="text-slate-600">
                           <span className="font-semibold mr-1">
                              {artifact?.likeCount}
                           </span>
                           <span>Likes</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Divider */}
               <div className="border-t border-gray-200" />

               {/* Button */}
               <div className="px-5 md:px-6 text-center">
                  <Link
                     to={"/"}
                     className="btn btn-primary btnHover text-white text-base font-semibold rounded-none px-10"
                  >
                     Featured Roommate
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ArtifactDetails;
