import React from "react";
import "./home.css";
import Header from "../../componets/header/Header";
import Sidebar from "../../componets/sidebar/Sidebar";
import Post from "../../componets/postes/Post";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post className="posts" />
        <Sidebar className="sidebar" />
      </div>
    </>
  );
}
export default Home;
