import React from "react";
import "./setting.css";
import Sidebar from "../../componets/sidebar/Sidebar"

function Setting(){
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingDeleteTitle">
                         Delete Account
                    </span>
                </div>
                <form action="" className="settingForm">
                   <label>Profile Picture</label>
                   <div className="settingPP">
                    <img src="dfg"
                     alt="ProfilePictureHere" />
                     <label htmlFor="fileInput">
                        <i className=" settingPPIcon far fa-user-circle"></i>
                     </label>
                     <input type="file" id="fileInput"  style={{display:"none"}}/>
                   </div>
                <label>Username</label>
                <input type="text" placeholder="safak" />
                <label>Email</label>
                <input type="text" placeholder="safak@gmail.com" />
                <label>Passsword</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>

                
                </form>
            </div>
        <Sidebar />
        </div>
    )
}

export default Setting;
