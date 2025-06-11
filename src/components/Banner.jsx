import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import slider1 from "../assets/image.jpg";
import slider2 from "../assets/gallery1.jpg";
import slider3 from "../assets/gallery3.jpg";
import slider4 from "../assets/gallery4.jpg";
import slider5 from "../assets/gallery2.jpg";
import { ThreeCircles } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import locationImg from "../assets/location.png";

const Banner = () => {
   const { loading, setLoading } = useContext(AuthContext);
   const [bannerData, setBannerData] = useState([]);
   const sliderImages = [slider1, slider2, slider3, slider4, slider5];

   useEffect(() => {
      fetch("banner.json")
         .then((res) => res.json())
         .then((data) => {
            setBannerData(data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-dvh">
            <ThreeCircles
               visible={true}
               height="100"
               width="100"
               color="#e2b13c"
               ariaLabel="three-circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
            />
         </div>
      );
   }

   return (
      <div className="container mx-auto xs:px-2 md:relative">
         <div>
            {bannerData.length >= 1 && (
               <Swiper
                  loop={true}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     dynamicBullets: true,
                     clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
               >
                  {bannerData.map((banner, index) => (
                     <SwiperSlide key={index}>
                        <div
                           className="hero min-h-[90dvh] md:min-h-screen"
                           style={{
                              backgroundImage: `url(${
                                 sliderImages[index % sliderImages.length]
                              })`,
                              backgroundSize: "cover",
                              backgroundPosition: "center top",
                           }}
                        >
                           <div className="hero-overlay bg-black opacity-65"></div>
                           <div className="hero-content text-neutral-content">
                              <div className="max-w-3xl text-center">
                                 <h3 className="rancho text-2xl italic tracking-widest mb-4">
                                    {banner.subtitle}
                                 </h3>
                                 <h1 className="mb-5 text-2xl md:text-4xl font-bold leading-10 md:leading-14 uppercase">
                                    {banner.title}
                                 </h1>
                                 <p className="mb-5 text-[#aab0b3] text-justify md:text-center">
                                    {banner.description}
                                 </p>
                                 <button className="btn btn-white btnHover text-base px-10 rounded-none py-6">
                                    Learn More
                                 </button>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </div>

         {/* Information Card */}
         <div className="flex justify-center">
            <div className="md:absolute -bottom-72 z-40 w-full md:w-11/12 shadow-2xl">
               <div className="grid grid-cols-1 md:grid-cols-3 bg-base-200 text-black">
                  {/* Open Hours */}
                  <div className="bg-white text-center px-6 py-10 flex flex-col items-center gap-4">
                     <div className="bg-accent p-6 rounded-full">
                        <img
                           src="https://img.icons8.com/?size=100&id=67447&format=png&color=000000"
                           alt="Image"
                           className="w-8 scale-150"
                        />
                     </div>
                     <h3 className="text-2xl font-bold text-color-black">
                        Open Hours
                     </h3>
                     <p className="text-secondary">Daily: 9.30 AM–6.00 PM</p>
                     <p className="text-secondary">Sunday & Holidays: Closed</p>
                     <button className="btn btn-outline border hover:bg-[#252930] hover:text-white duration-500 rounded-none mt-4 px-6">
                        All Hours
                     </button>
                  </div>

                  {/* Find Location */}
                  <div className="bg-black text-white text-center px-6 py-10 flex flex-col items-center gap-4">
                     <div className="bg-[#30343B] p-6 rounded-full">
                        <img
                           src={locationImg}
                           alt="Image"
                           className="w-8 scale-150"
                        />
                     </div>
                     <h3 className="text-2xl font-bold">Find Location</h3>
                     <p className="text-secondary">Muszex Museums 32 Quincy</p>
                     <p className="text-secondary">Street Cambridge, MA</p>
                     <button className="btn bg-primary border-none mt-4 hover:bg-white text-white hover:text-black rounded-none duration-500 px-6">
                        Getting Here
                     </button>
                  </div>

                  {/* Get Ticket */}
                  <div className="bg-white text-center px-6 py-10 flex flex-col items-center gap-4">
                     <div className="bg-accent p-6 rounded-full">
                        <img
                           src="https://img.icons8.com/?size=100&id=AB0jhoFIENKy&format=png&color=000000"
                           alt="Image"
                           className="w-8 scale-125 rotate-180"
                        />
                     </div>
                     <h3 className="text-2xl font-bold text-color-black">
                        Get Ticket
                     </h3>
                     <p className="text-secondary">Muszex Museums 32 Quincy</p>
                     <p className="text-secondary">Street Cambridge, MA</p>
                     <button className="btn btn-outline border hover:bg-[#252930] hover:text-white duration-500 rounded-none mt-4 px-6">
                        Buy Online
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
