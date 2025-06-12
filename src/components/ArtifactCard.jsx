import React from 'react';

const ArtifactCard = ({ artifact }) => {
   const { _id, artifactName, imageURL, artifactType, discoveredAt } = artifact;

   return (
      <div className="card bg-base-200 shadow-xl border border-accent">
         <figure className="h-48 overflow-hidden">
            <img
               src={imageURL}
               alt={artifactName}
               className="object-cover w-full h-full"
            />
         </figure>
         <div className="card-body text-black">
            <h2 className="card-title text-lg font-bold text-[color:var(--color-black)]">
               {artifactName}
            </h2>
            <div className="flex flex-wrap justify-between items-center text-sm">
               <span className="badge badge-outline text-[color:var(--color-secondary)]">
                  {artifactType}
               </span>
               <span className="text-[color:var(--color-secondary)]">
                  Discovered: {discoveredAt}
               </span>
            </div>
            <div className="card-actions justify-end mt-4">
               <a
                  href={`/artifacts/${_id}`}
                  className="btn btn-sm bg-[color:var(--color-primary)] text-white hover:bg-yellow-600"
               >
                  View Details
               </a>
            </div>
         </div>
      </div>
   );
};

export default ArtifactCard;
 