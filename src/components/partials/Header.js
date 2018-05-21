import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { logout } from '../../shared/utils';

const Header = (props) => {

    const logouthandler = () => {
        logout();
        props.history.push("/");        
    }
    
    return (
        <div className="headerContainer blue">
            <div className="header">
                <ul className="navUL">
                    <Link to="/"><li>V2P</li></Link>
                    <Link to="/sisterGuilds"><li>SisterGuilds</li></Link>
                    <Link to="/enemies"><li>Enemies</li></Link>
                    <Link to="/speedupCounter"><li>Speedup Counter</li></Link>
                </ul>

                <ul className="navUL right">
                    <Link to="/addPlayer"><li>Add Player</li></Link>
                    <Link to="/updatePlayer"><li>Update Player</li></Link>
                    {sessionStorage.getItem("token") ? <li onClick={logouthandler} className="headerLogout">Logout</li> : ""}
                </ul>
            </div>
        </div>
    );
}

export default withRouter(Header);