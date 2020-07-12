import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumb from "../parts/Breadcrumb";
import Posts from "../parts/Posts";
import SideBar from "../parts/SideBar";

const Category = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <SideBar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
