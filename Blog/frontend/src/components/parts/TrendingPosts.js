import React from "react";

const TrendingPosts = () => {
  return (
    <section className="top-home-section">
      <div className="container">
        <div className="title-section text-center">
          <h1>Trending Posts</h1>
        </div>
        <div className="top-home-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="news-post image-post">
                <img src="upload/blog/home5/a1.jpg" alt="" />
                <div className="hover-post">
                  <a className="category-link" href="#">
                    Lifestyle
                  </a>
                  <h2>
                    <a href="single-post.html">Praesent placerat quiseros.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>3 days ago</li>
                    <li>
                      <a href="#">2 comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <a href="single-post.html">
                        <img src="upload/blog/home2/m2.jpg" alt="" />
                      </a>
                    </div>
                    <a className="text-link" href="#">
                      Travel
                    </a>
                    <h2>
                      <a href="single-post.html">Vestibulum auctor dapibus.</a>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="#">Stan Enemy</a>
                      </li>
                      <li>3 days ago</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <a href="single-post.html">
                        <img src="upload/blog/home2/m3.jpg" alt="" />
                      </a>
                    </div>
                    <a className="text-link" href="#">
                      Travel
                    </a>
                    <h2>
                      <a href="single-post.html">Praesent placerat risus.</a>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="#">Stan Enemy</a>
                      </li>
                      <li>3 days ago</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <a href="single-post.html">
                        <img src="upload/blog/home2/m6.jpg" alt="" />
                      </a>
                    </div>
                    <a className="text-link" href="#">
                      Food
                    </a>
                    <h2>
                      <a href="single-post.html">Aliquam tincidunt mauriseu</a>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="#">Stan Enemy</a>
                      </li>
                      <li>2 weeks ago</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <div className="image-holder">
                      <a href="single-post.html">
                        <img src="upload/blog/home2/m7.jpg" alt="" />
                      </a>
                    </div>
                    <a className="text-link" href="#">
                      Lifestyle
                    </a>
                    <h2>
                      <a href="single-post.html">Praesent placerat risus.</a>
                    </h2>
                    <ul className="post-tags">
                      <li>
                        by <a href="#">Stan Enemy</a>
                      </li>
                      <li>2 weeks ago</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;
