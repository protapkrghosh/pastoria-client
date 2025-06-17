import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";

const AllArtifacts = () => {
   const artifactsData = useLoaderData();
   const [text] = useTypewriter({
      words: ["Ancient Wonders", "Echoes of History", "Timeless Treasures"],
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 50,
      delaySpeed: 1000,
   });

   const [searchInput, setSearchInput] = useState("");

   return (
      <div>
         <Helmet>
            <title>All Artifacs — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16 bg-base-200">
            <div className="text-secondary">
               <h1 className="rancho text-black/90 text-5xl font-bold text-center tracking-wider mb-5">
                  All Historical Artifacts
               </h1>

               <p className="md:w-[80%] mx-auto leading-8 text-justify md:text-center text-base-300">
                  Delve into the vast collection of artifacts that have
                  withstood the test of time—each piece a window into the
                  civilizations, beliefs, and artistry of those who came before
                  us
               </p>
            </div>

            {/* Search */}
            <div className="my-10 md:w-3/5 mx-auto">
               <label className="input cusInput">
                  <svg
                     className="h-[1em] opacity-50"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                  >
                     <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                     >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                     </g>
                  </svg>

                  <input
                     type="search"
                     value={searchInput}
                     onChange={(e) => setSearchInput(e.target.value)}
                     placeholder={searchInput ? "" : `${text} |`}
                     className="bg-transparent"
                  />
               </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {artifactsData.data.map((artifact) => (
                  <ArtifactCard key={artifact._id} artifact={artifact} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default AllArtifacts;
