import React from "react";

const PostItem = (props) => {
  return (
    <div className="news-post article-post2">
      <div className="row">
        <div className="col-md-6">
          <div className="image-holder">
            <img src="upload/blog/f1.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <a className="text-link" href="#">
            {props.post.category.categoryName}
          </a>
          <h2>
            <a href="single-post.html">{props.post.title}</a>
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
          <p>{props.post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
