import React from "react";
import "./justpost.css";
import { Link } from "react-router-dom";

function Justpost() {
  return (
    <div className="justpost">
      <div className="card-image">
        <Link to="/post/:postId" className="link">
          {" "}
          <img
            className="postImg"
            src="https://media.istockphoto.com/id/1370813651/photo/surfboard-and-palm-tree-on-beach-in-summer.webp?b=1&s=612x612&w=0&k=20&c=Cyx4by7iQxrda02ZxCjHmcnXIPz3ZdjszeTA6Uy6_BY="
            alt="Loading"
          />{" "}
        </Link>
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">
          <Link to="/post/:postId" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <span className="postDate">1 hour ago</span>
        <p className="postDisc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
export default Justpost;
