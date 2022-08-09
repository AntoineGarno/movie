import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const Review = (props) => {
  const [pop, setPop] = useState([]);
  const [showMore, setShowMore] = useState(false);

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
    <div className=" d-flex row flex-column">
      {pop
        .filter((movie, index) => index < 2)
        .map((movie) => (
          <div className="review col d-flex flex-row">
            <div className="d-flex flex-column ">
              <h3>{movie.author}</h3>
              <p>Écris le {movie.updated_at}</p>
            </div>
            <p>
              {showMore ? movie.content : movie.content.substring(0, 350)}
              <button
                className="btn reviewBtn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Review;
