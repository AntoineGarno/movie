import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Review from "../components/Review";
import SimilarMovies from "../components/SimilarMovies";
import Trailer from "../components/Trailer";

const MovieDetails = () => {
  const { slug } = useParams();

  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <Details id={slug} />
        </div>
        {/* <Trailer id={slug} /> */}
        <Actors id={slug} />
        <div className="row">
          <div className="d-inline-flex flex-row filmographie py-3 " id="FilmoActeurs">
            <h4 className="py-2 mx-2 ">Vous allez aussi aimer..</h4>
            <span class="mt-4 degrade-horizontal"></span>
          </div>
        </div>
        <div className="p-3 m-3 row">
          <SimilarMovies id={slug} />
          <div className="d-inline-flex flex-row filmographie py-3 m-5" id="FilmoActeurs">
            <h4 className="mx-2">Avis des Internautes</h4>
            <span class="mt-4 degrade-horizontal"></span>
          </div>
          <Review id={slug} />
        </div>
        <div className="d-flex justify-content-start align-items-center px-4 mx-5">
          <span>Vous avez vu MOVIE TITLE ?</span><button className="btn-review">Donner son avis</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
