import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Header() {
    const history = useHistory();
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
                <input type="text" placeholder = 'Find your holiday home here!'/>
                <SearchIcon />
            </div>

            <div className='header__right'>
                 <Button onClick={() => history.push('/')} variant='outlined'>Home</Button>
                 <Button onClick={() => history.push('/logged in')} variant='outlined'>Login</Button>
                 <Button onClick={() => history.push('/sign')} variant='outlined'>Sign Up</Button>
                {/* <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar /> */}
            </div>
        </div>
    )
}

export default Header
