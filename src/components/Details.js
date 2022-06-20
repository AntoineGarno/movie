import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
const Details = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data));
  }, []);
  console.log(pop);

  return (
    <div className="main row">
      <h1>{pop.title}</h1>
      <img
        className="bgDetails col-4"
        src={"https://image.tmdb.org/t/p/original" + pop.backdrop_path}
        alt=""
      />
      <div className="movieDescription col-8">
        <img
          src={"https://image.tmdb.org/t/p/w200" + pop.poster_path}
          alt="poster"
          className="images"
        />
        <div className="row">
          <p>{pop.overview}</p>
          <p>{pop.vote_average} /10</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
