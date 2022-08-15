import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Review from "../components/Review";
import SimilarMovies from "../components/SimilarMovies";
import Trailer from "../components/Trailer";
import Movie from "../components/Movie";

const MovieDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <Navigation />
      <div className="mx-sm-auto container">
        <div className="row">
          <Details id={slug} />
        </div>
        {/* <Trailer id={slug} /> */}
        <Actors id={slug} />
        <div className="row">
          <div
            className="d-inline-flex flex-row filmographie py-3 "
            id="FilmoActeurs"
          >
            <h4 className="py-2 mx-2 ">Movies you might like..</h4>
            <span class="mt-4 degrade-horizontal"></span>
          </div>
        </div>
        <SimilarMovies id={slug} />
        <Review id={slug} />
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
