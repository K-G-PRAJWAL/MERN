import React from "react";

const Slider = () => {
  return (
    <section className="top-slider-section fullscreen-slider">
      <div className="top-slider-box text-center">
        <div className="owl-wrapper">
          <div className="owl-carousel" data-num="1">
            <div className="item">
              <div className="news-post image-post">
                <img src="upload/blog/home5/sl1.jpg" alt="" />
                <div className="hover-post">
                  <div>
                    <a className="category-link" href="#">
                      Travel
                    </a>
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Integer vitae libero acrisus egestas.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <a href="#">3 comments</a>
                    </li>
                    <li>3 days ago</li>
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                  </ul>
                  <a className="white-button" href="single-post.html">
                    View Post
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="news-post image-post">
                <img src="upload/blog/home5/sl2.jpg" alt="" />
                <div className="hover-post">
                  <div>
                    <a className="category-link" href="#">
                      Lifestyle
                    </a>
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Praesent placerat risus quis eros.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      <a href="#">3 comments</a>
                    </li>
                    <li>3 days ago</li>
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                  </ul>
                  <a className="white-button" href="single-post.html">
                    View Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
