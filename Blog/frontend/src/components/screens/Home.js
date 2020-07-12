import React from "react";
import Header from "../parts/Header";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";
import FreshStories from "../parts/FreshStories";
import Footer from "../parts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
