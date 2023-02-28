import React from "react";
import { NavLink } from "react-router-dom";
import imgNotFound from "../images/imgNotFound.jpg";
const Movie = ({ movie }) => {
  return (
    <NavLink exact to={"/details/" + movie.id} className="image-container">
      <div className="overlay d-flex align-items-center justify-content-center">
        {movie.title}
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
        alt="poster"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping test
          currentTarget.src = imgNotFound;
        }}
        className="images"
      />
    </NavLink>
  );
};

export default Movie;
