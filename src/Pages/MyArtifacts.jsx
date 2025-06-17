import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import sectionArrow from "../assets/section-header-seprator.png";
import axios from "axios";
import Modal from "../components/Modal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyArtifacts = () => {
   const { user } = useContext(AuthContext);
   const [allArtifacts, setAllArtifacts] = useState([]);
   const [artifactId, setArtifactId] = useState(null);

   useEffect(() => {
      axios
         .get(`${import.meta.env.VITE_URL}/artifacts`)
         .then((result) => {
            setAllArtifacts(result.data);
         })
         .catch((error) => console.log(error));
   }, []);

   const artifacts = allArtifacts.filter(
      (art) => art?.userEmail === user?.email
   );

   const handleDeleteArtifact = (id) => {
      // Swal alert for deleted list
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            // Listing deleted
            axios
               .delete(`${import.meta.env.VITE_URL}/artifact/${id}`)
               .then((result) => {
                  if (result.data.deletedCount) {
                     toast.success("Your Artifact has been deleted");
                  }

                  const updatedArtifacts = allArtifacts.filter(
                     (art) => art._id !== id
                  );
                  setAllArtifacts(updatedArtifacts);
               })
               .catch((error) => {
                  console.log(error);
                  toast.error(error.message);
               });
         }
      });
   };

   return (
      <div>
         <Helmet>
            <title>My Artifacts — Pastoria</title>
         </Helmet>

         <div className="bg-base-200 py-14 md:min-h-[80dvh] 2xl:min-h-[60dvh]">
            <div className="container mx-auto px-2 md:px-6 lg:px-12">
               <div className="mb-10">
                  <h2 className="rancho text-black/90 text-5xl text-center font-bold tracking-wider mb-3">
                     My Artifact
                  </h2>

                  <img src={sectionArrow} alt="" className="mx-auto" />
               </div>

               {artifacts.length > 0 ? (
                  <>
                     <div className="overflow-x-auto rounded-md border border-[#3caa9f73]">
                        <table className="table w-full bg-white shadow-lg">
                           <thead className="bg-base-300 text-white">
                              <tr>
                                 <th className="md:pl-12">Artifact Name</th>
                                 <th>Location</th>
                                 <th>Discovered By</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {artifacts.map((art) => (
                                 <tr
                                    key={art._id}
                                    className="hover:bg-gray-100"
                                 >
                                    <td className="ptSerif text-base tracking-wide font-semibold md:pl-12">
                                       {art?.artifactName.length > 60
                                          ? art?.artifactName.slice(0, 50) +
                                            "..."
                                          : art?.artifactName}
                                    </td>

                                    <td className="capitalize">
                                       {art?.presentLocation}
                                    </td>
                                    <td>
                                       {art?.discoveredBy.length > 30
                                          ? art?.discoveredBy.slice(0, 30) +
                                            "..."
                                          : art?.discoveredBy}
                                    </td>

                                    <td className="flex space-x-3">
                                       <button
                                          onClick={() => {
                                             setArtifactId(art._id);
                                             document
                                                .getElementById(
                                                   "artifact_modal"
                                                )
                                                .showModal();
                                          }}
                                          className="btn btn-outline btn-primary p-2 hover:text-white btn-sm"
                                       >
                                          <FaRegEdit size={20} />
                                       </button>

                                       <button
                                          onClick={() =>
                                             handleDeleteArtifact(art._id)
                                          }
                                          className="btn btn-outline btn-error p-2 hover:text-white btn-sm"
                                       >
                                          <RiDeleteBin5Fill size={20} />
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </>
               ) : (
                  <>
                     <div className="max-w-4xl mx-auto bg-[#fff] border-8 border-gray-200 p-5 md:px-10 md:py-14 rounded-xl text-center">
                        <div className="bg-[#e2b03c21] text-primary mx-auto w-fit p-4 rounded-full">
                           <HiOutlineLightBulb size={33} />
                        </div>

                        <h2 className="text-2xl text-gray-700 font-semibold my-5">
                           No Artifacts listing available at the moment.
                        </h2>

                        <p className="text-secondary text-sm md:w-[60%] lg:w-[55%] mx-auto">
                           You have not added any lists under your account. To
                           create a new list, please use the Add List option
                           provided below.
                        </p>

                        <Link
                           to={"/add-artifact"}
                           className="btn btn-primary btnHover w-full md:w-auto text-white px-10 mt-6 rounded-none"
                        >
                           Add Artifact
                        </Link>
                     </div>
                  </>
               )}
            </div>

            {/* Modal */}
            <Modal
               artifactId={artifactId}
               MyArtifacts={allArtifacts}
               setMyArtifacts={setAllArtifacts}
            />
         </div>
      </div>
   );
};

export default MyArtifacts;
