import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const FicheActor = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "/credits?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data.cast));
  }, []);
  console.log(props);
  console.log("test");

  return (
    <div className=" row ">
      {pop.map((actor) =>
        props.id == actor.id ? (
          <div className="col">
            <img
              className="actorImg"
              src={"https://image.tmdb.org/t/p/w200" + actor.profile_path}
              alt=""
            />
            <p>{actor.original_name}</p>
          </div>
        ) : (
          console.log(actor.id)
        )
      )}
    </div>
  );
};

export default FicheActor;
