import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
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

         <div className="container mx-auto px-2 md:px-6 lg:px-12 bg-base-200 py-16">
            <div className="bg-white shadow rounded-lg max-w-3xl mx-auto overflow-hidden">
               <div>
                  <img
                     src={artifact?.imageURL}
                     alt="Image"
                     className="w-full h-[70dvh] object-cover"
                  />
               </div>

               {/* Description Section */}
               <div className="px-5 md:px-6">
                  <div className="flex justify-between pt-10">
                     <div className="text-sm text-secondary font-medium tracking-wide uppercase">
                        {artifact?.artifactType} &nbsp;&nbsp;|&nbsp;&nbsp; By{" "}
                        {artifact?.discoveredBy}
                     </div>

                     <div className="text-sm text-end">
                        <p className="text-slate-500">Posted By</p>
                        <h4 className="text-slate-600 font-medium capitalize">
                           {artifact?.userName}
                        </h4>
                     </div>
                  </div>

                  <h2 className="ptSerif text-[22px] md:text-3xl font-bold text-black yesevaOne tracking-wider mt-4 mb-6">
                     {artifact?.artifactName}
                  </h2>

                  <p className="text-secondary leading-8">
                     {artifact?.description}
                  </p>

                  {/* Reaction Area */}
                  <div className="my-6">
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
