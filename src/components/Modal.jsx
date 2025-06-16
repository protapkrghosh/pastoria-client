import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({ artifactId, MyArtifacts, setMyArtifacts }) => {
   // Found a clickable artifact in a modal
   const artifact = MyArtifacts.find((art) => art._id === artifactId);

   const handleUpdateArtifact = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const artifactInfo = Object.fromEntries(formData.entries());

      axios
         .patch(
            `${import.meta.env.VITE_URL}/artifacts/${artifactId}`,
            artifactInfo
         )
         .then((result) => {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Artifact updated successfully!",
               showConfirmButton: false,
               timer: 1500,
            });

            axios
               .get(`${import.meta.env.VITE_URL}/artifacts`)
               .then((result) => {
                  setMyArtifacts(result.data);
               })
               .catch((error) => console.log(error));
         })
         .catch((error) => {
            console.log(error);
            toast.error(error.message);
         });
   };

   return (
      <div>
         <dialog id="artifact_modal" className="modal">
            <div className="modal-box max-w-4xl bg-base-200">
               <form method="dialog">
                  <button className="btn btn-sm btn-circle rounded-full bg-red-100 hover:bg-red-200 border border-red-200 text-red-400 absolute right-3 top-5">
                     ✕
                  </button>
               </form>

               <div className="my-12 lg:px-3">
                  <h2 className="rancho text-secondary text-5xl text-center font-bold tracking-wider mb-10 opacity-50">
                     Update Artifact Details
                  </h2>

                  {/* Update Artifact form */}
                  <form
                     onSubmit={handleUpdateArtifact}
                     className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                     <div>
                        <label className="label">Artifact Name *</label>
                        <input
                           required
                           name="artifactName"
                           defaultValue={artifact?.artifactName}
                           className="input input-bordered cusInput w-full"
                           placeholder="Rosetta Stone"
                        />
                     </div>

                     <div>
                        <label className="label">Artifact Image (URL) *</label>
                        <input
                           required
                           name="imageURL"
                           defaultValue={artifact?.imageURL}
                           className="input input-bordered cusInput w-full"
                           placeholder="https://"
                        />
                     </div>

                     <div>
                        <label className="label">Artifact Type *</label>
                        <select
                           required
                           name="artifactType"
                           value={artifact?.artifactType}
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
                           defaultValue={artifact?.context}
                           className="input input-bordered cusInput w-full"
                           placeholder="Used during Roman Empire"
                        />
                     </div>

                     <div>
                        <label className="label">Created At *</label>
                        <input
                           required
                           name="createAt"
                           defaultValue={artifact?.createAt}
                           className="input input-bordered cusInput w-full"
                           placeholder="100 BC"
                        />
                     </div>

                     <div>
                        <label className="label">Discovered At *</label>
                        <input
                           required
                           name="discoveredAt"
                           defaultValue={artifact?.discoveredAt}
                           className="input input-bordered cusInput w-full"
                           placeholder="1799"
                        />
                     </div>

                     <div>
                        <label className="label">Discovered By *</label>
                        <input
                           required
                           name="discoveredBy"
                           defaultValue={artifact?.discoveredBy}
                           className="input input-bordered cusInput w-full"
                           placeholder="Pierre-Francois Bouchard"
                        />
                     </div>

                     <div>
                        <label className="label">Present Location *</label>
                        <input
                           required
                           name="presentLocation"
                           defaultValue={artifact?.presentLocation}
                           className="input input-bordered cusInput w-full"
                           placeholder="British Museum, London"
                        />
                     </div>

                     <div className="md:col-span-2">
                        <label className="label">Short Description *</label>
                        <textarea
                           required
                           name="description"
                           defaultValue={artifact?.description}
                           className="textarea textarea-bordered cusInput w-full"
                           rows={3}
                        ></textarea>
                     </div>

                     <div className="text-center md:col-span-2 mt-1">
                        <input
                           type="submit"
                           value="Update Artifact"
                           className="btn btn-primary btnHover text-white rounded-none"
                        />
                     </div>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   );
};

export default Modal;
