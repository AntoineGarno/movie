import axios from "axios";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="row">
      <div className="d-inline-flex flex-row filmographie" id="FilmoActeurs">
        <h4 className="py-2">Review</h4>
        <span class="mt-4 degrade-horizontal"></span>
      </div>
      {pop
        .filter((movie, index) => index < 2)
        .map((movie) => (
          <div class="col testimonial-box ">
            <div class="box-top">
              <div class="profile">
                <div class="name-user">
                  <strong className="p-2">{movie.author}</strong>
                  <span className="p-2 col text-muted">
                    Date : {movie.updated_at}
                  </span>
                </div>
              </div>
              <div class="col reviews d-flex flex-row">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star-half text-warning"></i>
              </div>
            </div>
            <div class="client-comment">
              {/* <p className="p-2 col-12 reviewContent">
                {showMore ? movie.content : movie.content.substring(0, 350)}
                <button
                  className="btn reviewBtn"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p> */}
              <p>{movie.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Review;
