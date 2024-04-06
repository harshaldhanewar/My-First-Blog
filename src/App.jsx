import React from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Topbar from "./componets/topbar/Topbar";
import Single from "./pages/single/Single";
import Setting  from "./pages/settings/Setting";

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const user =false;
  return (
    <BrowserRouter>
<Topbar/>
<Routes>
  <Route path="/post/:postId" element={<Single/>} ></Route>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={user ? <Home /> :<Login/>}></Route>
  <Route path="/register" element={user ? <Home /> :<Register/>}></Route>
  <Route path="/write" element={user ? <Write /> :<Register/>}></Route>
  <Route path="/profilesetting" element={ user ? <Setting /> :<Register/>} ></Route>
</Routes>
</BrowserRouter> 


  );
}
export default App;

