import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
   // const { user } = useContext(AuthContext);
   // console.log(user);

   const links = [
      <NavLink to={"/"} key={"home"} className={"navLinks"}>
         Home
      </NavLink>,

      <NavLink
         to={"/all-artifacts"}
         key={"all-artifacts"}
         className={"navLinks"}
      >
         All Artifacts
      </NavLink>,

      <NavLink
         to={"/add-artifacts"}
         key={"add-artifacts"}
         className={"navLinks"}
      >
         Add Artifacts
      </NavLink>,
   ];

   return (
      <div className="bg-[#fff] sticky top-0 border-b border-[#d8efed] z-50">
         <div className="container mx-auto px-2 md:px-6 lg:px-12">
            <div className="navbar py-4 px-0">
               <div className="navbar-start">
                  <div className="dropdown">
                     <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           {" "}
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"
                           />{" "}
                        </svg>
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4"
                     >
                        {links}

                        <Link
                           to={"/signin"}
                           className="btn btn-primary btnHover text-white rounded-none yesevaOne tracking-widest uppercase mb-4"
                        >
                           Sign In
                        </Link>

                        <Link
                           to={"/signup"}
                           className="btn btn-primary btnHover text-white rounded-none yesevaOne tracking-widest uppercase"
                        >
                           Sign Up
                        </Link>
                     </ul>
                  </div>

                  <Link
                     to={"/"}
                     className="text-primary text-3xl font-semibold islandMoments"
                  >
                     HomiFy
                  </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">{links}</ul>
               </div>

               <div className="navbar-end gap-3">
                  {/* {user ? (
                     <>
                        <div
                           className="avatar avatar-online"
                           data-tooltip-id="user-tooltip"
                           data-tooltip-place="bottom"
                        >
                           <div className="w-10 rounded-full ring-[#e7f0ef] ring-2 ring-offset-2">
                              <img
                                 src={
                                    user?.photoURL
                                       ? user.photoURL
                                       : "https://i.ibb.co/mFrvXNpF/avatar.png"
                                 }
                                 alt="User Avatar"
                              />
                           </div>
                        </div>

                        <Tooltip
                           id="user-tooltip"
                           className="text-black bg-[#c4dddb]"
                           clickable={true}
                           style={{
                              backgroundColor: "#c4dddb",
                              color: "#000",
                              padding: "20px",
                              borderRadius: "5px",
                              textAlign: "center",
                              fontSize: "14px",
                           }}
                        >
                           <div>
                              <div>
                                 <h4 className="text-[17px] font-semibold capitalize">
                                    {user?.displayName}
                                 </h4>
                                 <p className="text-slate-600">{user?.email}</p>
                              </div>
                              <button
                                 onClick={handleSignOut}
                                 className="btn btn-primary btnHover text-white rounded-none yesevaOne tracking-widest uppercase mt-4"
                              >
                                 Sign Out
                              </button>
                           </div>
                        </Tooltip>
                     </>
                  ) : (
                     <>
                        <div className="hidden md:block space-x-3">
                           <Link
                              to={"/signin"}
                              className="btn btn-primary btnHover text-white rounded-none yesevaOne tracking-widest uppercase "
                           >
                              Sign In
                           </Link>

                           <Link
                              to={"/signup"}
                              className="btn btn-primary btnHover text-white rounded-none yesevaOne tracking-widest uppercase"
                           >
                              Sign Up
                           </Link>
                        </div>
                     </>
                  )} */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
