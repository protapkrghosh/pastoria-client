import React from "react";

const ArtifactCard = ({ artifact }) => {
   const { _id, artifactName, imageURL, artifactType, discoveredAt } = artifact;

   return (
      <div className="group relative bg-white shadow-md border border-accent rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
         <div className="h-52 w-full overflow-hidden">
            <img
               src={imageURL}
               alt={artifactName}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
         </div>

         <div className="p-4 space-y-2 text-[color:var(--color-black)]">
            <h2 className="text-xl font-semibold line-clamp-1">{name}</h2>

            <div className="flex justify-between items-center text-sm text-[color:var(--color-secondary)]">
               <span className="badge bg-gradient-to-r from-yellow-400 to-yellow-300 text-black border-none px-3 py-1">
                  {artifactType}
               </span>
               <span>🗓 {discoveredAt}</span>
            </div>

            <div className="pt-2 flex justify-end">
               <a
                  href={`/artifacts/${_id}`}
                  className="btn btn-sm rounded-full bg-[color:var(--color-primary)] text-white hover:bg-yellow-600 transition-all duration-200"
               >
                  View Details
               </a>
            </div>
         </div>
      </div>
   );
};

export default ArtifactCard;
