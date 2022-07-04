import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FicheActor from "../components/FicheActor";
import { useParams } from "react-router-dom";

const ActorDetails = () => {
  const { slug } = useParams();

  return (
    <div className="bg-dark">
      <Navigation />
      <FicheActor id={slug} />

      <Footer />
    </div>
  );
};

export default ActorDetails;
