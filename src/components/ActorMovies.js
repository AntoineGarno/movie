import axios from "axios";
import React from "react";
import Movie from "./Movie";

import { useEffect, useState } from "react";

const ActorMovies = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
        props.id +
        "/movie_credits?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.cast));
  }, []);
  console.log(pop);

  return (
    <div className="container d-flex justify-content-around">
      {pop
        .filter((movie, index) => index < 4)
        .map((movie) => (
          <div className="row">
            <div>
              <Movie movie={movie} key={movie.id} />
              <div className="bg-dark mx-3 p-1">{movie.title}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActorMovies;
