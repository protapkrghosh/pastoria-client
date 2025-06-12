import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";

const AllArtifacts = () => {
   const artifactsData = useLoaderData();

   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16 bg-base-200">
         <h1 className="rancho text-5xl font-bold text-secondary text-center tracking-wider mb-10 opacity-60">
            All Historical Artifacts
         </h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifactsData.data.map((artifact) => (
               <ArtifactCard key={artifact._id} artifact={artifact} />
            ))}
         </div>
      </div>
   );
};

export default AllArtifacts;
