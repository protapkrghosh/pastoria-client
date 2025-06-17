import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { FaRegSadTear } from "react-icons/fa";
import arrow from "../assets/arrow.png";
import sectionArrow from "../assets/section-header-seprator.png";
import { FiLink } from "react-icons/fi";

const LikedArtifacts = () => {
   const data = useLoaderData();
   const { user } = useContext(AuthContext);

   const likedArtifacts = data?.data.filter((artifact) =>
      artifact?.likedBy?.includes(user?.email)
   );

   return (
      <div className="bg-base-200 pt-14 pb-20">
         <Helmet>
            <title>Liked Artifacts — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12">
            <div className="mb-12">
               <h2 className="rancho text-secondary text-center text-5xl font-bold tracking-wider opacity-60 mb-5">
                  Your Liked Artifacts
               </h2>

               <img src={sectionArrow} alt="" className="mx-auto" />
            </div>

            {likedArtifacts.length === 0 ? (
               <div className="max-w-4xl mx-auto bg-[#fff] border-8 border-gray-200 p-5 md:px-10 md:py-14 rounded-xl text-center">
                  <div className="bg-[#e2b03c21] text-primary mx-auto w-fit p-4 rounded-full">
                     <FaRegSadTear size={33} />
                  </div>

                  <h2 className="text-2xl text-gray-700 font-semibold my-5">
                     No Liked Artifacts Found
                  </h2>

                  <p className="text-secondary text-sm md:w-[60%] lg:w-[55%] mx-auto">
                     You haven’t expressed liked for history yet!
                  </p>

                  <Link
                     to={"/all-artifacts"}
                     className="btn btn-primary btnHover w-full md:w-auto text-white px-10 mt-6 rounded-none"
                  >
                     More Artifact
                  </Link>
               </div>
            ) : (
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {likedArtifacts.map((artifact) => (
                     <div
                        key={artifact._id}
                        className="bg-white/70 hover:shadow-md border border-accent rounded-md overflow-hidden duration-500 group"
                     >
                        {/* Image Area with Hover */}
                        <div className="relative">
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
                                 className="bg-primary/80 p-3 mt-4"
                              >
                                 <FiLink size={17} className="text-white" />
                              </Link>
                           </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-5 space-y-2">
                           <div className="text-sm text-secondary flex items-center gap-2 py-2">
                              <div>
                                 <span className="font-semibold">
                                    {artifact.likedBy?.length || 0}
                                 </span>{" "}
                                 Likes &nbsp; |
                              </div>

                              <div>
                                 {/* {artifact?.presentLocation} */}
                                 {artifact?.presentLocation.length > 23
                                    ? artifact?.presentLocation.slice(0, 21) +
                                      "..."
                                    : artifact?.presentLocation}
                              </div>
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
