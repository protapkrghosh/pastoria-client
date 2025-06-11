import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false);

   const handleSignUp = () => {};

   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 bg-secondary py-16">
         <Helmet>
            <title>Sign Up — HomiFy</title>
         </Helmet>

         <div className="lg:flex md:max-w-6xl mx-auto bg-white">
            <div className="lg:w-[50%] border-r border-base-200">
               <div
               // className="hero min-h-screen place-items-baseline"
               // style={{
               //    backgroundImage: `url(${bedroom})`,
               // }}
               >
                  <div className="hero-overlay"></div>
                  <div className="hero-content mt-14">
                     <div className="max-w-md">
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
                           <div className="bg-[#F3F3F3] hover:bg-[#e6e5e5] text-black p-4 rounded-full w-fit duration-300 group cursor-pointer">
                              <FcGoogle
                                 size={25}
                                 className="group-hover:scale-110 duration-300"
                              />
                           </div>

                           <div className="bg-[#F3F3F3] hover:bg-[#e6e5e5] text-black p-4 rounded-full w-fit duration-300 group cursor-pointer">
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
            <div className="lg:w-[50%] text-center bg-white py-10 px-4 md:px-0">
               <h1 className="text-3xl text-black font-extrabold tracking-wider">
                  Pastoria
               </h1>
               <p className="text-[14px] md:text-[20px] font-semibold mt-2 mb-7">
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

                     <small className="flex items-center gap-2 text-accent">
                        <input
                           type="checkbox"
                           name="terms"
                           className="checkbox checkbox-xs checkbox-primary"
                        />
                        <p>I agree to the Terms & Policy</p>
                     </small>

                     <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary btnHover text-white uppercase w-full mt-5 mb-3 h-[44px]"
                     />

                     <small className="text-accent">
                        Already a member?{" "}
                        <Link to={"/signin"} className="hover:underline">
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
