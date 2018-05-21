import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { getFormattedCurrentDate } from '../../shared/utils';
import GuildInfo from './GuildInfo';
import TroopsInfo from './TroopsInfo';
import PlayerInfo from './PlayerInfo';
import PrivateRoute from '../partials/PrivateRoute';

class AddPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            might: "",
            castle25: false,
            guild: "",
            rank: "1",
            heroicFighter: "",
            heroicCannoneer: "",
            ancientDrakeRider: "",
            destroyer: "",
            royalGuard: "",
            stealthSniper: "",
            royalCavalry: "",
            fireTrebuchet: "",
            timeZone: "",
            lastUpdate: "",
            sign: "+"
        }
    }

    componentWillMount() {
        this.setState({ lastUpdate: getFormattedCurrentDate() })
    }

    inputHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    checkboxHandler = (e) => {
        this.setState({ [e.target.id]: !this.state.castle25 })
    }

    render() {
        console.log(this.state);
        
        return (
            <Fragment>
                <Route exact path="/addPlayer/playerInfo" render={()=> <PlayerInfo checkboxHandler={this.checkboxHandler} inputHandler={this.inputHandler} />} />
                <Route exact path="/addPlayer/guildInfo" render={()=> <GuildInfo />} />
                <Route exact path="/addPlayer/troopsInfo" render={()=> <TroopsInfo />} />
            </Fragment>
        );
    }
}

export default AddPlayers;