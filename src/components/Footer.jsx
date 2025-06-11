import React from "react";
import {
   FaFacebookF,
   FaTwitter,
   FaLinkedinIn,
   FaTumblr,
   FaMapMarkerAlt,
   FaPhoneAlt,
   FaEnvelope,
   FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import arrow from "../assets/arrow.png";
import { GiPaperArrow } from "react-icons/gi";

const Footer = () => {
   return (
      <div className="bg-black text-base-300">
         <footer className="container mx-auto px-2 md:px-6 lg:px-12 md:mt-96 py-20">
            <div className="grid md:grid-cols-3 gap-10">
               {/* Left Column - Logo Area */}
               <div>
                  <Link
                     to={"/"}
                     className="text-primary text-3xl font-semibold flex items-center gap-2"
                  >
                     <img
                        src={logo}
                        alt="Logo"
                        className="h-12 contrast-125 rounded-full"
                     />
                     <span className="hidden md:block rancho tracking-wider">
                        Pastoria
                     </span>
                  </Link>

                  <p className="text-sm text-color-accent my-10 leading-6">
                     Preserving the past, one artifact at a time. Historical
                     Artifacts Tracker is your companion in exploring,
                     documenting, and learning about relics from ancient
                     civilizations to modern marvels. Whether you're a
                     researcher, collector, or enthusiast — discover the stories
                     behind the artifacts that shaped our world.
                  </p>
                  <div className="flex gap-4">
                     {[FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr].map(
                        (Icon, idx) => (
                           <button
                              key={idx}
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer"
                           >
                              <Icon />
                           </button>
                        )
                     )}
                  </div>
               </div>

               {/* Center Column - Explore Links */}
               <div className="md:mx-auto my-8 md:my-0">
                  <div>
                     <h3 className="text-primary text-lg font-bold mb-2">
                        EXPLORE GUIDE
                     </h3>

                     <img src={arrow} alt="icon" />
                  </div>

                  <div className="space-y-4 mt-10">
                     {[
                        "Home",
                        "All Artifacts",
                        "Add Artifacts",
                        "Privacy Policy",
                        "Terms Of Use",
                     ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                           <GiPaperArrow className="text-primary" />
                           <a
                              href="#"
                              className="hover:text-color-primary transition hover:underline"
                           >
                              {item}
                           </a>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Column - Subscribe */}
               <div>
                  <div>
                     <h3 className="text-primary text-lg font-bold mb-2">
                        SUBSCRIBE
                     </h3>
                     <img src={arrow} alt="icon" />
                  </div>

                  <div className="flex items-center border border-color-accent rounded overflow-hidden mt-10">
                     <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="flex-1 p-3 bg-transparent text-color-accent focus:outline-none"
                     />
                     <button className="bg-primary text-white p-4 cursor-pointer group">
                        <FaPaperPlane className="group-hover:scale-125 duration-300" />
                     </button>
                  </div>

                  <p className="my-6">
                     Get Latest Events and Exhibitions News.
                  </p>

                  <div className="flex items-start gap-2 border-y border-[#494949] py-4 mb-6">
                     <FaMapMarkerAlt className="text-color-primary mt-1" />
                     <p>California, USA, Christian Max Museum</p>
                  </div>

                  <div className="text-sm flex items-center gap-8">
                     <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-color-primary" />
                        <p>+1234556789</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaEnvelope className="text-color-primary" />
                        <p>support@pastoria.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

         {/* Bottom Bar */}
         <div className="bg-[#1F1F1F] text-center text-sm py-6">
            <p>
               Copyright © {new Date().getFullYear()} - All right reserved by
               Pastoria
            </p>
         </div>
      </div>
   );
};

export default Footer;
