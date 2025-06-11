import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {
   const { signInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);

   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signInUser(email, password)
         .then((result) => {
            toast.success("Sign In Successfully");
            form.reset();
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then((result) => toast.success("Sign In Successfully"))
         .catch((error) => {
            toast.error(error.code);
         });
   };

   const handleGitHubSignIn = () => {
      gitHubSignIn()
         .then((result) => toast.success("Sign In Successfully"))
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-16 bg-base-200">
         <Helmet>
            <title>Sign In — HomiFy</title>
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
                              Sign in to return to your historical journey.
                              Access your profile, manage tracked artifacts, and
                              continue your research. Connect with a global
                              community passionate about preserving the past.
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
            <div className="lg:w-[50%] text-center bg-white px-4 md:px-0 py-24">
               <h1 className="text-3xl text-black font-extrabold tracking-wider">
                  Pastoria
               </h1>
               <p className="text-secondary text-[14px] md:text-[20px] font-semibold mt-2 mb-7">
                  Sign Into Your Account
               </p>

               <div className="md:max-w-md lg:max-w-sm mx-auto">
                  <form onSubmit={handleSignUp}>
                     <label className="input validator cusInput px-5 w-full rounded-full">
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

                     <label className="input validator cusInput pl-5 mt-4 w-full rounded-full">
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

                     <input
                        type="submit"
                        value="Sign In"
                        className="btn btn-primary btnHover text-white uppercase w-full mt-5 mb-3 h-[44px] rounded-full"
                     />

                     <small className="text-black">
                        Don't have an account?{" "}
                        <Link
                           to={"/signup"}
                           className="hover:underline font-medium"
                        >
                           Sign up
                        </Link>
                     </small>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
