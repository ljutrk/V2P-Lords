import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import SisterGuilds from './sisterGuild/SisterGuilds';
import Enemies from './enemies/Enemies';
import AddPlayer from './addPlayer/AddPlayer';
import PrivateRoute from './partials/PrivatRoute';
import Login from './login/Login';

const Main = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/sisterGuilds" component={SisterGuilds} />
            <Route exact path="/enemies" component={Enemies} />
            <Route exact path="/Login" component={Login} />
            <PrivateRoute exact path="/addPlayer" component={AddPlayer} />
        </Fragment>
    );
}
 
export default Main;