import React from "react";
import Header from "../parts/Header";
import PostDesc from "../parts/PostDesc";
import Comment from "../parts/Comment";
import Footer from "../parts/Footer";

const Single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Single;
