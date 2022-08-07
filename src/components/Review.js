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

  return (
    <div className=" d-flex row flex-column ">
      {pop
        .filter((movie, index) => index < 3)
        .map((movie) => (
          <div className="review col d-flex p-3">
            <div className="d-flex flex-column ">
              <h3 className="p-3">{movie.author}</h3>
              <p className="p-3">Écris le {movie.updated_at}</p>
            </div>
            <p className="p-3 col-10 reviewContent">{movie.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Review;
