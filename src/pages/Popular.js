import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PopularMovies from "../components/PopularMovies";
const Popular = () => {
  return (
    <div>
      <Navigation />
      <PopularMovies />
      <Footer />
    </div>
  );
};

export default Popular;
