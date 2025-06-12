import React from "react";

const AddArtifact = () => {
   const handleAddArtifact = (e) => {
      e.preventDefault();
   };

   return (
      <div>
         <div className="min-h-screen bg-base-200 pt-16 pb-24 px-4 sm:px-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg px-3 py-8 md:px-10 md:py-12 border border-gray-200">
               <div className="text-secondary text-center mb-12">
                  <h2 className="text-3xl font-bold mb-5">Add New Artifact</h2>

                  <p className="md:w-[80%] mx-auto leading-8">
                     Join in preserving history by submitting artifacts from
                     your collection or research — together we build an open and
                     lasting archive of human heritage
                  </p>
               </div>

               <form
                  onSubmit={handleAddArtifact}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
               >
                  <div>
                     <label className="label">Artifact Name</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="Rosetta Stone"
                     />
                  </div>

                  <div>
                     <label className="label">Artifact Image (URL)</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="https://..."
                     />
                  </div>

                  <div>
                     <label className="label">Artifact Type</label>
                     <select className="select select-bordered cusInput w-full">
                        <option>Tools</option>
                        <option>Weapons</option>
                        <option>Documents</option>
                        <option>Writings</option>
                        <option>Other</option>
                     </select>
                  </div>

                  <div>
                     <label className="label">Historical Context</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="Used during Roman Empire..."
                     />
                  </div>

                  <div>
                     <label className="label">Created At</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="100 BC"
                     />
                  </div>

                  <div>
                     <label className="label">Discovered At</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="1799"
                     />
                  </div>

                  <div>
                     <label className="label">Discovered By</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="Pierre-François Bouchard"
                     />
                  </div>

                  <div>
                     <label className="label">Present Location</label>
                     <input
                        className="input input-bordered cusInput w-full"
                        placeholder="British Museum, London"
                     />
                  </div>

                  <div>
                     <label className="label">Your Name</label>
                     <input
                        readOnly
                        className="input input-bordered cusInput w-full cursor-no-drop bg-gray-100"
                     />
                  </div>

                  <div>
                     <label className="label">Your Email</label>
                     <input
                        readOnly
                        className="input input-bordered cusInput w-full cursor-no-drop bg-gray-100"
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label className="label">Short Description</label>
                     <textarea
                        className="textarea textarea-bordered cusInput w-full"
                        rows={3}
                     ></textarea>
                  </div>

                  <div className="text-center md:col-span-2 mt-1">
                     <button
                        type="submit"
                        className="btn btn-primary btnHover text-white rounded-none"
                        // disabled={loading}
                     >
                        {/* {loading ? "Adding..." : "Add Artifact"} */}
                        Add Artifact
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddArtifact;
