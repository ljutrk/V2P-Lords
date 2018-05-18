import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/addPlayers"><li>Add Players</li></Link>
                </ul>

                {/* <div className="headerBtn"> */}
                {/* <Link to="/addPlayers"><button className="addPlayersBtn">Add Players</button></Link> */}
                {/* </div> */}

            </div>
        </div>
    );
}

export default Header;