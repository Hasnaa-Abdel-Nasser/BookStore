import React from 'react';
import './Navbar.css';
import search from '../../image/search.png'
import logo from '../../image/logo.png'
import CustomizedSwitches from './switch/switch'

function Navbar(){
    return(
        <div className = "nav">
            <img className = "search" src= {search} alt={"Search"} />
            <img className = "logo" src= {logo} alt={"Search"} />
            <div className="theme">
            <div className = "user-picture"></div>
            <CustomizedSwitches />
            </div>
        </div>
    );
}
export default Navbar;