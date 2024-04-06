import React from "react";
import "./single.css";
import Sidebar from "../../componets/sidebar/Sidebar";
import Singlepost from "../../componets/Singlepost/Singlepost"

function Single(){
    return(
        <div className="single">
           <Singlepost/>
            <Sidebar/>
        </div>
    );
}

export default Single;
