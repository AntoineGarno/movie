import axios from "axios";
import React from "react";
import imgNotFound from "../images/imgNotFound.jpg";
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
  }, [refreshPage]);
  console.log(pop);
  function refreshPage() {
    window.location.reload(false);
  }
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }

  return (
    <div className="main row d-flex my-5">
      <img
        className="bgDetails col-4"
        src={"https://image.tmdb.org/t/p/original" + pop.backdrop_path}
        alt=""
      />
      <div className="movieDescription col d-flex justify-content-between ">
        <img
          src={"https://image.tmdb.org/t/p/w200" + pop.poster_path}
          alt="poster"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = imgNotFound;
          }}
          className="images col-2"
        />
        <div className="row mr-auto col-10 ">
          <h1 className="mb-5">{pop.title}</h1>

          <div className="px-5">
            <p>{pop.overview}</p>
            <p>Date de sortie: {pop.release_date}</p>
            <p>{pop.vote_average} /10</p>
            <p>{timeConvert(pop.runtime)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
