import image from "../assets/cow.png";
import arrow from "../assets/section-header-seprator.png";

const History = () => {
   return (
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-10 md:pt-0 md:pb-24">
         <div className="md:flex items-center gap-6">
            <div className="md:w-[50%] ">
               <img src={image} alt="" className="mx-auto" />
            </div>

            <div className="md:w-[50%] text-center mt-14 md:mt-0">
               <div>
                  <h4 className="ptSerif text-2xl text-primary italic">
                     Welcome to
                  </h4>
                  <h1 className="text-4xl text-black/90 font-bold uppercase mt-3">
                     Pastoria History
                  </h1>

                  <img src={arrow} alt="" className="mx-auto w-[22%] mt-3" />
               </div>

               <p className="ptSerif text-secondary leading-8 mt-10 mb-7 text-justify md:text-start">
                  Then one day he was shooting at food and up through the ground
                  came a bubbling crude oil that is so lets make the most of
                  this beautiful day since we are together space the final
                  frontier these are the voyages of the Starship Enterprise
                  today still wanted by the government they survive as soldiers
                  of fortune would not you like to get away sometimes you want
                  to go where everybody knows your name.
               </p>

               <button className="text-sm text-primary hover:text-black font-medium cursor-pointer duration-300 uppercase">
                  Read More
               </button>
            </div>
         </div>
      </div>
   );
};

export default History;
