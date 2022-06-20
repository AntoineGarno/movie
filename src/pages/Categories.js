import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import CategoriesList from "../components/CategoriesList";
const Categories = () => {
  return (
    <div className="main">
      <Navigation />
      <CategoriesList />
      <Footer />
    </div>
  );
};

export default Categories;
