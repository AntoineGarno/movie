import axios from "axios";
import React from "react";
import Movie from "./Movie";

import { useEffect, useState } from "react";

const SimilarMovies = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "/similar?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.results));
  }, []);
  console.log(pop);

  return (
    <div className="row target">
      {pop.map((movie) => (
        <div className="col">
          <Movie movie={movie} key={movie.id} />
        </div>
      ))}
    </div>
  );
};

export default SimilarMovies;
