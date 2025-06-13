import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";

const MyArtifacts = () => {
   const data = useLoaderData();
   const { user } = useContext(AuthContext);
   const artifacts = data.data.filter(
      (art) => art?.userEmail === user?.email
   );

   return (
      <div>
         <Helmet>
            <title>My Artifacts — Pastoria</title>
         </Helmet>

         <div className="bg-base-200 py-14 md:min-h-[80dvh] 2xl:min-h-[60dvh]">
            <div className="container mx-auto px-2 md:px-6 lg:px-12">
               <h2 className="rancho text-secondary text-5xl text-center font-bold tracking-wider mb-10 opacity-60">
                  My Artifact
               </h2>

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
                              {artifacts.map((list) => (
                                 <tr
                                    key={list._id}
                                    className="hover:bg-gray-100"
                                 >
                                    <td className="ptSerif text-base tracking-wide font-semibold md:pl-12">
                                       {list?.artifactName.length > 60
                                          ? list?.artifactName.slice(0, 50) +
                                            "..."
                                          : list?.artifactName}
                                    </td>

                                    <td className="capitalize">
                                       {list?.presentLocation}
                                    </td>
                                    <td>
                                       {list?.discoveredBy.length > 30
                                          ? list?.discoveredBy.slice(0, 30) +
                                            "..."
                                          : list?.discoveredBy}
                                    </td>

                                    <td className="flex space-x-3">
                                       <button
                                          onClick={() => {
                                             setListId(list._id);
                                             document
                                                .getElementById("list_modal")
                                                .showModal();
                                          }}
                                          className="btn btn-outline btn-primary p-2 hover:text-white btn-sm"
                                       >
                                          <FaRegEdit size={20} />
                                       </button>

                                       <button
                                          onClick={() =>
                                             handleDeleteListing(list._id)
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
            {/* <Modal
               listId={listId}
               myLists={myLists}
               setMyListing={setMyListing}
            /> */}
         </div>
      </div>
   );
};

export default MyArtifacts;
