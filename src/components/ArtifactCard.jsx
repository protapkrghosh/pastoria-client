import { MdOutlineZoomOutMap } from "react-icons/md";

const ArtifactCard = ({ artifact }) => {
   const {
      _id,
      artifactType,
      artifactName,
      imageURL,
      likeCount,
      discoveredBy,
      description,
   } = artifact;

   return (
      <div className="bg-white rounded-none overflow-hidden mx-auto border-8 border-transparent hover:border-[#77777725] w-full duration-500 group">
         {/* Image Section */}
         <div className="relative">
            <img
               src={imageURL}
               alt={artifactName}
               className="w-full h-56 object-cover group-hover:scale-105 duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex items-center justify-center h-[230px]">
               <MdOutlineZoomOutMap
                  size={70}
                  className="text-white opacity-25"
               />
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 right-4 bg-white p-1 rounded-none shadow-md text-xs font-medium text-secondary z-10">
               <div className="flex items-center gap-2">{artifactType}</div>
            </div>
         </div>

         {/* Info Section */}
         <div className="p-5">
            <div className="text-sm text-secondary font-medium tracking-wide uppercase">
               {likeCount} Likes &nbsp;&nbsp;|&nbsp;&nbsp; By {discoveredBy}
            </div>

            <h2 className="ptSerif text-2xl font-bold text-black my-4 line-clamp-2">
               {artifactName}
            </h2>

            <p className="text-secondary text-sm mb-4 line-clamp-3 leading-7">
               {description || "No description available for this artifact."}
            </p>

            <a href={`/details/${_id}`} className="text-sm text-black hover:underline">
               Learn More
            </a>
         </div>
      </div>
   );
};

export default ArtifactCard;
