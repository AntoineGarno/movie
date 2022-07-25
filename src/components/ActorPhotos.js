import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const ActorPhotos = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
          props.id +
          "/images?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.profiles));
  }, []);
  console.log(pop);

  return (
    <div className="container d-flex justify-content-around">
      {pop
        .filter((actor, index) => index < 5)
        .map((actor) => (
          <div className="row">
            <div>
              <img
                src={"https://image.tmdb.org/t/p/w200" + actor.file_path}
                alt=""
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActorPhotos;
