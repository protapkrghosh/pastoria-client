import arrow from "../assets/arrow.png";
import { Link } from "react-router";
import image from "../assets/placeholder.jpg";
import { FiLink } from "react-icons/fi";

const ArtifactCard = ({ artifact }) => {
   const {
      _id,
      artifactType,
      artifactName,
      imageURL,
      likedBy,
      discoveredBy,
      description,
   } = artifact;
   const placeholderImage = imageURL || image;

   return (
      <div className="bg-white rounded-none overflow-hidden mx-auto border-8 border-transparent hover:border-[#77777725] w-full duration-500 group">
         {/* Image Section */}
         <div className="relative">
            <img
               src={placeholderImage}
               alt={artifactName}
               onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = image;
               }}
               className="w-full h-56 object-cover group-hover:scale-105 duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center h-[230px]">
               <img src={arrow} alt="Icon" className="w-1/2 h-2" />

               <Link
                  to={`/artifact/${artifact._id}`}
                  className="bg-primary/80 p-3 mt-4"
               >
                  <FiLink size={17} className="text-white" />
               </Link>
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 right-4 bg-white p-1 rounded-none shadow-md text-xs font-medium text-secondary z-10">
               <div className="flex items-center gap-2">{artifactType}</div>
            </div>
         </div>

         {/* Info Section */}
         <div className="p-5">
            <div className="text-sm text-secondary font-medium tracking-wide uppercase">
               <span className="font-extrabold">{likedBy?.length}</span> Likes
               &nbsp;&nbsp;|&nbsp;&nbsp; By {discoveredBy}
            </div>

            <h2 className="ptSerif text-2xl font-bold text-black my-4 line-clamp-2">
               {artifactName}
            </h2>

            <p className="text-secondary text-sm mb-4 line-clamp-3 leading-7">
               {description || "No description available for this artifact."}
            </p>

            <Link
               to={`/artifact/${_id}`}
               className="text-sm text-primary hover:underline"
            >
               Learn More
            </Link>
         </div>
      </div>
   );
};

export default ArtifactCard;
