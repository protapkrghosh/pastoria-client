import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FeaturedArtifacts from "../components/FeaturedArtifacts";
import History from "../components/History";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home — Pastoria</title>
         </Helmet>

         <Banner />
         <History />
         <FeaturedArtifacts />
      </div>
   );
};

export default Home;
