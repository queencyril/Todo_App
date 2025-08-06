import React from "react";
import "../Header/Header.css";
import Profile_pic from '../../assets/Profile_pic.jpg'


function Header() {
  return (
    <div className="header">
      <div className="header_logo_section">
      <div className="logo">
        {/* <img src="" alt="logo" /> */}
        <h3>lQ</h3>
      </div>
      <div className="appname">
        <h3>luQueens App</h3>
      </div>
      </div>
      <div className="profile_pic">
        <img src={Profile_pic} alt="profile_pic" />
      </div>
    </div>
  );
}

export default Header;
