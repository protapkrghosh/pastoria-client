import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";

const AllArtifacts = () => {
   const artifactsData = useLoaderData();
   console.log(artifactsData.data);

   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16">
         <h1 className="text-3xl font-bold text-secondary text-center mb-6">
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
