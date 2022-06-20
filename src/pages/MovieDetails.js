import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

const MovieDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <Navigation />
      <Details id={slug} />
      <Actors id={slug} />

      <Footer />
    </div>
  );
};

export default MovieDetails;
