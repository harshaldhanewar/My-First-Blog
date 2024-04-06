import React from "react";
import "./singlepost.css";

function Singlepost(){
    return(
        <div className="singlePost">
           <div className="singlePostWrapper">
            <img src="fsdsa" alt="singlepostimageisHere" className="singlePostImg" />
            <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
            </div>
           </h1>
           <div className="singlePostInfo">
            <span className="SinglePostAuthor"> Author:<b>Harshal</b></span>
            <span className="singlePostDate">1 hour ago</span>
           
           </div>
           <p className="singlePostDesc"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta obcaecati corporis molestias assumenda tempora, quasi quae eius odio laboriosam suscipit. Labore eum quisquam nemo, impedit nostrum aliquid magni placeat quas.</p>
           </div>
        </div>
    );
}

export default Singlepost;
