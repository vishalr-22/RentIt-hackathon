import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.ibb.co/H4XYqWH/rent-it-logo.jpg"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" placeholder = 'search...'/>
                <SearchIcon />
            </div>

            <div className='header__right'>
                <a href = '#'>Sign Up</a>
                <a href = "#">Login</a>
                {/* <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar /> */}
            </div>
        </div>
    )
}

export default Header
