import React from "react";

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="widget social-widget">
          <ul className="social-list">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
                facebook
                <span>25k likes</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
                twitter
                <span>31k followers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
                instagram
                <span>31k followers</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="widget category-widget">
          <h2>Categories</h2>
          <ul className="category-list">
            <li>
              <a href="#">
                Travel <span>24</span>
              </a>
            </li>
            <li>
              <a href="#">
                Lifestyle <span>16</span>
              </a>
            </li>
            <li>
              <a href="#">
                Food <span>8</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="widget list-widget">
          <h2>Latest Stories</h2>
          <ul className="list-posts">
            <li>
              <a className="text-link" href="#">
                Lifestyle
              </a>
              <h2>
                <a href="single-post.html">Fusce pellentesque suscipit.</a>
              </h2>
              <ul className="post-tags">
                <li>2 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Food
              </a>
              <h2>
                <a href="single-post.html">
                  Integer vitae libero ac risus egestas placerat.
                </a>
              </h2>
              <ul className="post-tags">
                <li>2 days ago</li>
                <li>
                  <a href="#">3 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Lifestyle
              </a>
              <h2>
                <a href="single-post.html">
                  Vestibulum commodo felisquis tortor.
                </a>
              </h2>
              <ul className="post-tags">
                <li>4 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-link" href="#">
                Travel
              </a>
              <h2>
                <a href="single-post.html">Quisque a lectus. </a>
              </h2>
              <ul className="post-tags">
                <li>4 days ago</li>
                <li>
                  <a href="#">0 comments</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
