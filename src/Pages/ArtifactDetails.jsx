import React from "react";
import { useParams } from "react-router";

const ArtifactDetails = () => {
   const { id } = useParams();

   return <div>Artifact Details Page</div>;
};

export default ArtifactDetails;
