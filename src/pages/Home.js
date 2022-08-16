import React from "react";
import Footer from "../components/Footer";
import MovieCarousel from "../components/MovieCarousel";
import Navigation from "../components/Navigation";
import HomePopular from "../components/home/HomePopular";
import HomeRated from "../components/home/HomeRated";

const Home = () => {
  return (
    <div>
      <Navigation />
      <MovieCarousel />
      <div className="">
        <div className="homePopular">
          <h1 className="mb-4 pb-5">Popular Movies</h1>
          <HomePopular />
        </div>
        <div className="homePopular">
          <h1 className="m-5 pb-5">Top Rated Movies</h1>
          <HomeRated />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
