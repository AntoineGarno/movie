import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Trailer = (props) => {
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "/videos?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&append_to_response=videos"
      )
      .then((res) => setPop(res.data.results));
  }, [refreshPage]);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="d-flex flex-lg-row flex-sm-column justify-content-center">
      {pop
        .filter((movie, index) => index < 1)
        .map((movie, index) => (
          <iframe
            width="800"
            height="600"
            src={"https://www.youtube.com/embed/" + movie.key}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mx-3 d-flex flex-column"
          ></iframe>
        ))}
    </div>
  );
};

export default Trailer;
