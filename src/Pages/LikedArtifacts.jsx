import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { FaHeart, FaRegSadTear } from "react-icons/fa";
import arrow from "../assets/arrow.png";
import { FiLink } from "react-icons/fi";

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
               <div className="flex flex-col items-center justify-center text-center mt-12">
                  <FaRegSadTear className="text-5xl text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-700">
                     No Liked Artifacts Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                     You haven’t expressed liked for history yet!
                  </p>
               </div>
            ) : (
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {likedArtifacts.map((artifact) => (
                     <div
                        key={artifact._id}
                        className="bg-white/70 hover:shadow-md border border-accent rounded-md overflow-hidden duration-300"
                     >
                        {/* Image Area with Hover */}
                        <div className="relative group">
                           <img
                              src={artifact?.imageURL}
                              alt={artifact?.artifactName}
                              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center h-[230px]">
                              <img
                                 src={arrow}
                                 alt="Icon"
                                 className="w-1/2 h-2"
                              />

                              <Link
                                 to={`/artifact/${artifact._id}`}
                                 className="bg-primary/80 p-2 mt-4"
                              >
                                 <FiLink size={17} className="text-white" />
                              </Link>
                           </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-5 space-y-2">
                           <div className="text-sm text-secondary flex items-center gap-2 pt-1">
                              <div>
                                 <span className="font-semibold">
                                    {artifact.likedBy?.length || 0}
                                 </span>{" "}
                                 Likes
                              </div>

                              <div>{artifact?.presentLocation}</div>
                           </div>

                           <h3 className="ptSerif text-base font-semibold text-black tracking-wide line-clamp-2">
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
