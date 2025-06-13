import React, { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { BiLike } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import image from "../assets/placeholder.jpg";

const ArtifactDetails = () => {
   const { user } = useContext(AuthContext);
   const { id } = useParams();
   const data = useLoaderData();
   const artifact = data.data.find((art) => art._id === id);
   const placeholderImage = artifact?.imageURL || image;
   const [likeCount, setLikeCount] = useState(artifact?.likeCount || 0);

   return (
      <div>
         <Helmet>
            <title>{artifact?.artifactName} — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {/* Image and Description */}
               <div className="md:col-span-2">
                  <div className="overflow-hidden rounded-lg shadow-md mb-8">
                     <img
                        src={placeholderImage}
                        alt={artifact?.artifactName}
                        onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = image;
                        }}
                        className="w-full h-[65vh] object-cover rounded-lg"
                     />
                  </div>

                  {/* Badge */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-secondary my-5">
                     <span className="bg-[#e2b03c3d] text-black px-3 py-1 rounded-full">
                        {artifact?.artifactType}
                     </span>

                     <p className="text-[#666]">
                        <span className="font-medium">Discovered by:</span>{" "}
                        {artifact?.discoveredBy}
                     </p>
                  </div>

                  <h1 className="ptSerif text-3xl md:text-4xl font-bold text-black tracking-wide">
                     {artifact?.artifactName}
                  </h1>

                  <p className="text-secondary leading-7 text-justify my-6">
                     {artifact?.description}
                  </p>

                  {/* Likes */}
                  <div className="flex items-center gap-2">
                     {user?.email === artifact?.userEmail ? (
                        <BiLike
                           size={24}
                           className="text-primary cursor-not-allowed"
                        />
                     ) : (
                        <BiLike
                           onClick={() => setLikeCount(likeCount + 1)}
                           size={24}
                           className="text-primary cursor-pointer hover:scale-110 transition"
                        />
                     )}

                     <div className="text-slate-600">
                        <span className="font-bold">{likeCount}</span>{" "}
                        <span className="font-medium">likes</span>
                     </div>
                  </div>
               </div>

               {/* Side Info Card */}
               <div className="bg-white rounded-lg shadow-lg space-y-4 p-6 border border-accent h-fit md:sticky md:top-24">
                  <h2 className="ptSerif text-xl font-semibold text-black mb-4 border-b border-gray-200 pb-2">
                     Artifact Information
                  </h2>

                  <Info label="Context" value={artifact?.context} />
                  <Info label="Discovered At" value={artifact?.discoveredAt} />
                  <Info
                     label="Present Location"
                     value={artifact?.presentLocation}
                  />
                  <Info label="Created At" value={artifact?.createAt} />

                  <div className="border-t border-gray-200 pt-4 mt-4">
                     <h3 className="text-sm text-gray-500 mb-1">Posted By</h3>
                     <p className="font-medium text-black">
                        {artifact?.userName}
                     </p>
                     <p className="text-xs text-gray-500">
                        {artifact?.userEmail}
                     </p>
                  </div>

                  <div className="pt-4 text-center">
                     <Link
                        to="/all-artifacts"
                        className="btn btn-primary btnHover w-full text-white font-semibold rounded-none"
                     >
                        See More Artifacts
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// Reusable Info Display Component
const Info = ({ label, value }) => (
   <div>
      <p className="text-sm text-secondary">{label}</p>
      <p className="text-black">{value || "—"}</p>
   </div>
);

export default ArtifactDetails;
