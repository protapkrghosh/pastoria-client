import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddArtifact = () => {
   const { user } = useContext(AuthContext);

   const handleAddArtifact = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const artifactInfo = Object.fromEntries(formData.entries());
      artifactInfo.likeCount = [];

      axios
         .post(`${import.meta.env.VITE_URL}/artifacts`, artifactInfo)
         .then((result) => {
            if (result.data.insertedId) {
               toast.success('Artifact Added Successfully')
               form.reset();
            }
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   return (
      <div>
         <div className="bg-base-200 container mx-auto px-3 sm:px-10 md:px-6 lg:px-12 pt-16 pb-24">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg px-3 py-8 md:px-10 md:py-12 border border-gray-200">
               <div className="text-secondary text-center mb-12">
                  <h2 className="rancho text-5xl font-bold tracking-wider mb-5 opacity-60">
                     Add New Artifact
                  </h2>

                  <p className="md:w-[80%] mx-auto leading-8 text-justify md:text-center text-base-300">
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
                     <label className="label">Artifact Name *</label>
                     <input
                        required
                        name="artifactName"
                        className="input input-bordered cusInput w-full"
                        placeholder="Rosetta Stone"
                     />
                  </div>

                  <div>
                     <label className="label">Artifact Image (URL) *</label>
                     <input
                        required
                        name="imageURL"
                        className="input input-bordered cusInput w-full"
                        placeholder="https://"
                     />
                  </div>

                  <div>
                     <label className="label">Artifact Type *</label>
                     <select
                        required
                        name="artifactType"
                        className="select select-bordered cusInput w-full"
                     >
                        <option value="" disabled>
                           Selected One
                        </option>
                        <option>Tools</option>
                        <option>Weapons</option>
                        <option>Documents</option>
                        <option>Writings</option>
                        <option>Other</option>
                     </select>
                  </div>

                  <div>
                     <label className="label">Historical Context *</label>
                     <input
                        required
                        name="context"
                        className="input input-bordered cusInput w-full"
                        placeholder="Used during Roman Empire..."
                     />
                  </div>

                  <div>
                     <label className="label">Created At *</label>
                     <input
                        required
                        name="createAt"
                        className="input input-bordered cusInput w-full"
                        placeholder="100 BC"
                     />
                  </div>

                  <div>
                     <label className="label">Discovered At *</label>
                     <input
                        required
                        name="discoveredAt"
                        className="input input-bordered cusInput w-full"
                        placeholder="1799"
                     />
                  </div>

                  <div>
                     <label className="label">Discovered By *</label>
                     <input
                        required
                        name="discoveredBy"
                        className="input input-bordered cusInput w-full"
                        placeholder="Pierre-François Bouchard"
                     />
                  </div>

                  <div>
                     <label className="label">Present Location *</label>
                     <input
                        required
                        name="presentLocation"
                        className="input input-bordered cusInput w-full"
                        placeholder="British Museum, London"
                     />
                  </div>

                  <div>
                     <label className="label">Your Name</label>
                     <input
                        readOnly
                        name="userName"
                        className="input input-bordered cusInput w-full cursor-no-drop bg-gray-100"
                        defaultValue={user?.displayName}
                     />
                  </div>

                  <div>
                     <label className="label">Your Email</label>
                     <input
                        readOnly
                        name="userEmail"
                        className="input input-bordered cusInput w-full cursor-no-drop bg-gray-100"
                        defaultValue={user?.email}
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label className="label">Short Description *</label>
                     <textarea
                        required
                        name="description"
                        className="textarea textarea-bordered cusInput w-full"
                        rows={3}
                     ></textarea>
                  </div>

                  <div className="text-center md:col-span-2 mt-1">
                     <input
                        type="submit"
                        value="Add Artifact"
                        className="btn btn-primary btnHover text-white rounded-none"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddArtifact;
