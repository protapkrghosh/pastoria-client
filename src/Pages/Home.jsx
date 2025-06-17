import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import FeaturedArtifacts from "../components/FeaturedArtifacts";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home — Pastoria</title>
         </Helmet>

         <Banner />
         <FeaturedArtifacts />
      </div>
   );
};

export default Home;
