import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import SisterGuilds from './sisterGuild/SisterGuilds';
import Enemies from './enemies/Enemies';
import AddPlayer from './addPlayer/AddPlayer';
import PrivateRoute from './partials/PrivateRoute';
import Login from './login/Login';
import SpeedupCounter from './SpeedupCounter/SpeedupCounter';
import UpdatePlayer from './updatePlayer/UpdatePlayer';

const Main = () => {
    
    return (
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/sisterGuilds" component={SisterGuilds} />
            <Route exact path="/enemies" component={Enemies} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/speedupCounter" component={SpeedupCounter} />
            <PrivateRoute path="/updatePlayer" component={UpdatePlayer} />
            <PrivateRoute path="/addPlayer" component={AddPlayer} />
        </div>
    );
}

export default Main;