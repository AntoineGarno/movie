import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Review from "../components/Review";
import SimilarMovies from "../components/SimilarMovies";

const MovieDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <Navigation />
      <div className="container">
        <Details id={slug} />
        <Actors id={slug} />
        <SimilarMovies id={slug} />
        <Review id={slug} />
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;
