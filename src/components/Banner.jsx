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
import { FidgetSpinner } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";

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
            <FidgetSpinner
               visible={true}
               height="100"
               width="100"
               ariaLabel="fidget-spinner-loading"
               backgroundColor="#3caa9f"
            />
         </div>
      );
   }

   return (
      <div className="container mx-auto xs:px-2">
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
   );
};

export default Banner;
