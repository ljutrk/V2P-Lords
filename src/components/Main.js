import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import SisterGuilds from './SisterGuilds';
import Enemies from './Enemies';
import AddPlayers from './AddPlayers';

const Main = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/sisterGuilds" component={SisterGuilds} />
            <Route exact path="/enemies" component={Enemies} />
            <Route exact path="/addPlayers" component={AddPlayers} />
        </Fragment>
    );
}
 
export default Main;