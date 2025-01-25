import React from "react";
import './nav.css';

function Nav(){

    return(
        <div className="nav-container">
            {/* <img className="logo" src="/Logo Remake Black.png" alt=""/> */}
            <div className="nav-title">
                <span>3D Paper Models</span>
                <span>vibrant-arrow.org</span>
            </div>
            <input type="text" />
            <span>Sign In</span>
            <span>Favourites</span>
            <span>Cart</span>
        </div>
    );
}

export default Nav;