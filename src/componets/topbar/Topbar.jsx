import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
function TopBar(){
    const user =false;
    return(
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fa-brands fa-square-facebook"></i>
            <i className=" topIcon fa-brands fa-square-x-twitter"></i>
            <i className=" topIcon fa-brands fa-square-instagram"></i>
            <i className=" topIcon fa-brands fa-square-whatsapp"></i>
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className="topListItem">
                        <Link to ="/" className="link" >HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link to ="/" className="link" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to ="/" className="link" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to ="/write" className="link" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                   {
                    user&&"LOGOUT"
                   }
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user?( <img className="topImg"
                    src="https://media.licdn.com/dms/image/D5603AQHjQycUFvB9nQ/profile-displayphoto-shrink_800_800/0/1667746496101?e=1708560000&v=beta&t=hp8CffJBq0pIn_WEhwDMrNOqKY8tL59-kAwM5oFcA1U" alt="PropfileImage" />):(
                        <ul className="toplist">
                            <li className="topListItem">
                            <Link to ="/login" className="link">LOGIN</Link>
                            </li>
                       
                            <li className="topListItem">
                            <Link to ="/register" className="link">REGISTER</Link>
                            </li>
                      
                        </ul>
                    )
                }
               
                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
export default TopBar;
