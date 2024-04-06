import React, { useState } from "react";
import "./home.css";
import Header from "../../componets/header/Header";
import Sidebar from "../../componets/sidebar/Sidebar";
import Post from "../../componets/postes/Post";

function Home() {
//   const [message, setMessage] = useState("Hit Request");
// //   setMessage("Hit Request");
  
//   const handleCick = async () => {
//       const url = "http://localhost:3000/api";
//       let {message} = await fetch(url, { credentials: 'include' }).then(v => v.json());
//       setMessage(message);
//     };
  return (
    <>
      <Header />
      {/* <button onClick={handleCick}>Send Req</button> */}
      <div className="home">
        <div>{message}</div>
        <Post className="posts" />
        <Sidebar className="sidebar" />
      </div>
    </>
  );
}
export default Home;
