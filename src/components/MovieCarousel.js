import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

const MovieCarousel = () => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US"
      )
      .then((res) => setPop(res.data.results));
  }, []);

  return (
    <div className="row carousel main d-flex main-info">
      <Carousel className="col-12 carousel">
        <Carousel.Item>
          <img
            className="bgDetails2 "
            src={
              "https://image.tmdb.org/t/p/original/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
            }
            alt=""
          />
          <Carousel.Caption>
            <img
              className=" images "
              src="https://image.tmdb.org/t/p/w200/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
              alt="First slide"
            />
            <h3>Thor: Love and Thunder</h3>
            <p>Release Date : 2022-07-06</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bgDetails2 "
            src={
              "https://image.tmdb.org/t/p/original/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
            }
            alt=""
          />

          <Carousel.Caption>
            <img
              className="images "
              src="https://image.tmdb.org/t/p/w200/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg"
              alt="Second slide"
            />
            <h3>Minions: The Rise of Gru</h3>
            <p>Release Date : 2022-06-29</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bgDetails2 "
            src={
              "https://image.tmdb.org/t/p/original/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg"
            }
            alt=""
          />
          <Carousel.Caption>
            <img
              className=" images "
              src="https://image.tmdb.org/t/p/w200/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
              alt="Third slide"
            />
            <h3>Jurassic World Dominion</h3>
            <p>Release Date : 2022-06-01</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
