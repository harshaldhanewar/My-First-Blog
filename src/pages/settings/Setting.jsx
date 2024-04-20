import React, { useEffect, useState } from "react";
import "./setting.css";
import Sidebar from "../../componets/sidebar/Sidebar"
import axios from "axios";
import useremail from "../../value";



function Setting(props){

console.log("I am an ID",props.userID);
const[imagesrc,setImageSrc]=useState()

    const [enableedit,setenableedit]=useState();

    

async function getdata(){
const getdata=await axios.post("http://localhost:5000/settingData",props.userID);
setenableedit(getdata.data);
console.log(getdata.data);
}

useEffect(()=>{getdata()},[])




const [updateData,setUpdateData]=useState(
{username:"",
email:"",
password:"",
profile:""}

)
console.log("data is u[dating",updateData);

function updateDetails(event){
    const {name,value}=event.target;
 setUpdateData((previous)=>{
      return{  ...previous,
        [name]:value
    }
    })
}

async function editdata(event){
    event.preventDefault();
const getUpadteValue=await axios.post("http://localhost:5000/setting",updateData);

}




const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      // Update the note object with the imageSrc
      setUpdateData((prevNote) => ({
        ...prevNote,
        profile: imageUrl,
      }));
    }
  };



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
                    <img src={imagesrc}
                     alt="ProfilePictureHere" />
                     <label htmlFor="fileInput">
                        <i className=" settingPPIcon far fa-user-circle"></i>
                     </label>
                     <input type="file" id="fileInput"  onChange={handleImageChange} style={{display:"none"}}/>
                   </div>
                <label >Username</label>
                <input onChange={updateDetails} type="text" placeholder="Enter Your Username...." name="username" />
                <label>Email</label>
                <input onChange={updateDetails} type="text" placeholder="Email" name="email" />
                <label>Passsword</label>
                <input onChange={updateDetails} type="password" placeholder="Password" name="password" />
                <button className="settingSubmit" onClick={editdata}>Update</button>

                
                </form>
            </div>
        <Sidebar />
        </div>
    )
}

export default Setting;
