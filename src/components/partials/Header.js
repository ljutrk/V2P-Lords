import React from 'react';
import { Link, Route } from 'react-router-dom';
import { logout } from '../../shared/utils';

const logouthandler = () => {
    logout();
    window.location.pathname = "/";
}

const Header = () => {
    return (
        <div className="container blue">
            <div className="header">
                <ul className="navUL">
                    <Link to="/"><li>V2P</li></Link>
                    <Link to="/sisterGuilds"><li>SisterGuilds</li></Link>
                    <Link to="/enemies"><li>Enemies</li></Link>
                </ul>

                <ul className="navUL right">
                    <Link to="/addPlayer"><li>Add Player</li></Link>
                    <Route path="/addplayer" render={()=>{
                        return <li onClick={logouthandler} className="headerLogout">Logout</li>
                    }}/>
                </ul>
            </div>
        </div>
    );
}

export default Header;