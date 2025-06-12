import React from "react";
import { useParams } from "react-router";

const ArtifactDetails = () => {
   const { id } = useParams();
   console.log(id);

   return <div>Artifact Details Page</div>;
};

export default ArtifactDetails;
