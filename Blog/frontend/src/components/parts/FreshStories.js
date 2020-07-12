import React from "react";

const FreshStories = () => {
  return (
    <section className="fresh-section on-trend-mode">
      <div className="container">
        <div className="title-section text-center">
          <h1>Fresh Stories</h1>
        </div>
        <div className="fresh-box owl-wrapper">
          <div className="owl-carousel" data-num="2">
            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a2.jpg" alt="" />
                </div>
                <a className="text-link" href="#">
                  Travel
                </a>
                <h2>
                  <a href="single-post.html">
                    Vivamus vestibulum ntulla necante.
                  </a>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="#">3 comments</a>
                  </li>
                  <li>
                    by <a href="#">John Smith</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
                <a className="text-link" href="single-post.html">
                  Read More
                </a>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a3.jpg" alt="" />
                </div>
                <a className="text-link" href="#">
                  Food
                </a>
                <h2>
                  <a href="single-post.html">
                    Praesent placerat risus quis eros.
                  </a>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="#">3 comments</a>
                  </li>
                  <li>
                    by <a href="#">John Smith</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
                <a className="text-link" href="single-post.html">
                  Read More
                </a>
              </div>
            </div>

            <div className="item">
              <div className="news-post article-post">
                <div className="image-holder">
                  <img src="upload/blog/home5/a4.jpg" alt="" />
                </div>
                <a className="text-link" href="#">
                  Food
                </a>
                <h2>
                  <a href="single-post.html">
                    Morbi in sem quisdui placerat ornare.
                  </a>
                </h2>
                <ul className="post-tags">
                  <li>3 days ago</li>
                  <li>
                    <a href="#">3 comments</a>
                  </li>
                  <li>
                    by <a href="#">John Smith</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra donec nec justo eget
                  felis facilisis fermentum ...{" "}
                </p>
                <a className="text-link" href="single-post.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshStories;
