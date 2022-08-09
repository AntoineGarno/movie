import axios from "axios";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <div className="container row">
      {pop
        .filter((movie, index) => index < 2)
        .map((movie) => (
          <div class=" testimonial-box ">
                <div class="box-top" >
                    <div class="profile">
                        <div class="name-user">
                        <strong className="p-2">{movie.author}</strong>
                            <span className="p-2 col text-muted">Date : {movie.updated_at}</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star-half" />
                    </div>
                </div>
                <div class="client-comment">
                <p className="p-2 col-12 reviewContent">{movie.content}</p>
                </div>
            </div>
        ))
      }
    </div >
  );
};

export default Review;
