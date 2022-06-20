import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import SearchMovies from "../components/SearchMovies";
const Search = () => {
  return (
    <div>
      <Navigation />
      <SearchMovies />
      <Footer />
    </div>
  );
};

export default Search;
