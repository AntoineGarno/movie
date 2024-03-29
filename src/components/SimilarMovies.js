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
  }, [refreshPage]);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="row actors justify-content-center">
      {pop
        .filter((movie, index) => index < 4)
        .map((movie) => (
          <Movie movie={movie} key={movie.id} onClick={refreshPage} />
        ))}
    </div>
  );
};

export default SimilarMovies;
