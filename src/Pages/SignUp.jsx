import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false);
   const { signUpUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      const terms = form.terms.checked;
      const newUser = { name, email, photoURL };

      // Password Validation
      if (!/.{6}/.test(password)) {
         toast.error("Must be more than 6 characters");
         return;
      } else if (!/(?=.*[a-z])/.test(password)) {
         toast.error("At least one lowercase letter");
         return;
      } else if (!/(?=.*[A-Z])/.test(password)) {
         toast.error("At least one uppercase letter");
         return;
      } else if (!/(?=.*\d)/.test(password)) {
         toast.error("At least one digit");
         return;
      } else if (!/(?=.*[@$#!%*?&])/.test(password)) {
         toast.error("At least one special character");
         return;
      }

      if (!terms) {
         toast.error("Please accept our Terms and Policy");
         return;
      }

      signUpUser(email, password)
         .then((res) => {
            // Post userinfo in database
            axios
               .post(`${import.meta.env.VITE_URL}/users`, newUser)
               .then((res) => {
                  if (res.data.insertedId) {
                     toast.success("Sign Up Successfully");
                     form.reset();
                  }
                  navigate(location?.state || "/signin");
               })
               .catch((error) => {
                  toast.error(error.code);
               });

            // Update user profile
            const profile = {
               displayName: name,
               photoURL: photoURL,
            };

            updateProfile(auth.currentUser, profile)
               .then(() => {})
               .catch((error) => toast.error(error.code));
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            toast.success("Sign In Successfully");
            navigate(location?.state || "/signin");
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   const handleGitHubSignIn = () => {
      gitHubSignIn()
         .then((result) => {
            toast.success("Sign In Successfully");
            navigate(location?.state || "/signin");
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16 bg-base-200">
         <Helmet>
            <title>Sign Up — HomiFy</title>
         </Helmet>

         <div className="lg:flex md:max-w-6xl md:w-full mx-auto bg-white shadow-lg">
            <div className="lg:w-[50%] border-r border-accent py-16">
               <div>
                  <div className="hero-content mt-14">
                     <div className="text-secondary max-w-md">
                        <div>
                           <h1 className="mb-5 text-3xl md:text-4xl font-bold uppercase">
                              welcome to Pastoria
                           </h1>
                           <p className="leading-8">
                              Create your account to explore, track, and
                              contribute to the world of historical artifacts.
                              Stay connected with discoveries, research, and the
                              global heritage community.
                           </p>
                        </div>

                        <h3 className="font-medium mt-7 mb-3 capitalize">
                           Sign In with social
                        </h3>

                        <div className="flex gap-5">
                           <div
                              onClick={handleGoogleSignIn}
                              className="bg-[#F3F3F3] hover:bg-[#e6e5e5] text-black p-4 rounded-full w-fit duration-300 group cursor-pointer"
                           >
                              <FcGoogle
                                 size={25}
                                 className="group-hover:scale-110 duration-300"
                              />
                           </div>

                           <div
                              onClick={handleGitHubSignIn}
                              className="bg-[#F3F3F3] hover:bg-[#e6e5e5] text-black p-4 rounded-full w-fit duration-300 group cursor-pointer"
                           >
                              <FaGithub
                                 size={25}
                                 className="group-hover:scale-110 duration-300"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="lg:w-[50%] text-center bg-white px-4 md:px-0 py-16">
               <h1 className="text-black text-3xl font-extrabold tracking-wider">
                  Pastoria
               </h1>
               <p className="text-secondary text-[14px] md:text-[20px] font-semibold mt-2 mb-7">
                  Create your account
               </p>

               <div className="md:max-w-md lg:max-w-sm mx-auto">
                  <form onSubmit={handleSignUp}>
                     <label className="input validator cusInput px-5 w-full rounded-full">
                        <input
                           type="text"
                           required
                           name="name"
                           placeholder="Full Name"
                        />

                        <svg
                           className="h-[1.1em] opacity-50 ml-2"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                        >
                           <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2.5"
                              fill="none"
                              stroke="currentColor"
                           >
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                           </g>
                        </svg>
                     </label>

                     <label className="input validator cusInput px-5 my-4 w-full rounded-full">
                        <input
                           type="email"
                           name="email"
                           placeholder="Email Address"
                           required
                        />

                        <svg
                           className="h-[1.1em] opacity-50 ml-2"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                        >
                           <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2.5"
                              fill="none"
                              stroke="currentColor"
                           >
                              <rect
                                 width="20"
                                 height="16"
                                 x="2"
                                 y="4"
                                 rx="2"
                              ></rect>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                           </g>
                        </svg>
                     </label>

                     <label className="input validator cusInput px-5 w-full rounded-full">
                        <input
                           type="url"
                           required
                           name="photoURL"
                           placeholder="https://"
                           pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                           title="Must be valid URL"
                        />

                        <svg
                           className="h-[1.1em] opacity-50 ml-2"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                        >
                           <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2.5"
                              fill="none"
                              stroke="currentColor"
                           >
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                           </g>
                        </svg>
                     </label>

                     <label className="input validator cusInput pl-5 my-4 w-full rounded-full">
                        <input
                           type={showPassword ? "text" : "password"}
                           required
                           name="password"
                           placeholder="Password"
                        />

                        <span onClick={() => setShowPassword(!showPassword)}>
                           {showPassword ? (
                              <ImEye
                                 size={15}
                                 className="text-[#8B8B8D] mr-2 cursor-pointer"
                              />
                           ) : (
                              <ImEyeBlocked
                                 size={15}
                                 className="text-[#8B8B8D] mr-2 cursor-pointer"
                              />
                           )}
                        </span>
                     </label>

                     <small className="flex items-center gap-2 text-black">
                        <input
                           type="checkbox"
                           name="terms"
                           className="checkbox checkbox-xs checkbox-secondary"
                        />
                        <p>I agree to the Terms & Policy</p>
                     </small>

                     <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary btnHover text-white uppercase w-full mt-5 mb-3 h-[44px] rounded-full"
                     />

                     <small className="text-black">
                        Already a member?{" "}
                        <Link
                           to={"/signin"}
                           className="hover:underline font-medium"
                        >
                           Sign In
                        </Link>
                     </small>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
