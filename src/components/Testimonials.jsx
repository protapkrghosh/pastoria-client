import arrow from "../assets/section-header-seprator.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import person1 from '../assets/testi1.jpg'
import person2 from '../assets/testi2.jpg'
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
   return (
      <div className="container mx-auto px-3 sm:px-10 md:px-6 lg:px-12 py-10 md:pt-20 md:pb-28">
         <div className="mb-12">
            <h2 className="rancho text-black/90 text-center text-5xl font-bold tracking-wider mb-3">
               Our visiters Says
            </h2>

            <img src={arrow} alt="" className="mx-auto" />
         </div>

         <div>
            <Swiper
               // loop={true}
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
               <SwiperSlide>
                  <div className="md:flex justify-between gap-10">
                     {/* Person One */}
                     <div className="md:w-1/2 md:flex items-center">
                        <div className="md:w-1/2 relative">
                           <img
                              src={person1}
                              alt="image"
                              className="w-11/12 mx-auto"
                           />

                           <div className="w-12 h-12 bg-primary text-white rounded-full flex justify-center items-center absolute top-1/3 left-5/12">
                              <FaQuoteRight size={16} />
                           </div>
                        </div>

                        <div className="md:w-1/2 text-secondary">
                           <p className="ptSerif mb-6">
                              The Historical Artifacts Tracker makes it so easy
                              to manage and display collections. It’s a valuable
                              tool for any museum or researcher
                           </p>

                           <h4 className="text-black/90 font-bold">
                              Loucine Walker
                           </h4>
                           <p className="ptSerif">Architect</p>
                        </div>
                     </div>

                     {/* Person Two */}
                     <div className="md:w-1/2 md:flex items-center mt-16 md:mt-0">
                        <div className="md:w-1/2 relative">
                           <img
                              src={person2}
                              alt="image"
                              className="w-11/12 mx-auto"
                           />

                           <div className="w-12 h-12 bg-primary text-white rounded-full flex justify-center items-center absolute top-1/3 left-5/12">
                              <FaQuoteRight size={16} />
                           </div>
                        </div>

                        <div className="md:w-1/2 text-secondary">
                           <p className="ptSerif mb-6">
                              While traveling, this site helped me understand
                              the story behind so many artifacts I came across.
                              A wonderful companion
                           </p>

                           <h4 className="text-black/90 font-bold">
                              Sophie Ahmed
                           </h4>
                           <p className="ptSerif">Global Digs Initiative</p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonials;
