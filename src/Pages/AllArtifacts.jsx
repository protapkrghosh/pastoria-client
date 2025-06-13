import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
   const artifactsData = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>All Artifacs — Pastoria</title>
         </Helmet>

         <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16 bg-base-200">
            <div className="text-secondary mb-10">
               <h1 className="rancho text-5xl font-bold text-center tracking-wider opacity-70 mb-5">
                  All Historical Artifacts
               </h1>

               <p className="md:w-[80%] mx-auto leading-8 text-justify md:text-center text-base-300">
                  Delve into the vast collection of artifacts that have
                  withstood the test of time—each piece a window into the
                  civilizations, beliefs, and artistry of those who came before
                  us
               </p>
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
