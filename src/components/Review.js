import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const Review = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "/reviews?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.results));
  }, []);
  console.log(pop);

  return (
    <div className="">
      {pop.map((movie) => (
        <div className="review">
          <h3>{movie.author}</h3>
          <p>{movie.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
