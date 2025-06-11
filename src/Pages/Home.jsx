import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import BannerCard from "../components/BannerCard";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home — Pastoria</title>
         </Helmet>

         <Banner />
      </div>
   );
};

export default Home;
