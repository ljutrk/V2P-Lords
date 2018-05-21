import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
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
            sign: "+",
            GFPts: "",
            phase: 1
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

    btnClickHandler = (e) => {
        e.preventDefault();

        if (e.target.id === "btnNext") {
            this.setState({ phase: this.state.phase + 1 })
        }

        if (e.target.id === "btnPrev") {
            // this.setState({ phase: this.state.phase - 1 })
            this.setState((prevState, props) => ({
                phase: prevState.phase - 1
            }));
        }

        if (e.target.id === "btnSubmit") {
            console.log("submit done!");

        }
    }


    render() {
        console.log(this.state);

        return (
            <div className="playerInfo">
                <form className="playerInfoForm">
                    <div className="playerInfoInnerDiv">
                        {this.state.phase === 1 ? <PlayerInfo checkboxHandler={this.checkboxHandler} inputHandler={this.inputHandler} /> : ""}
                        {this.state.phase === 2 ? <GuildInfo inputHandler={this.inputHandler} /> : ""}
                        {this.state.phase === 3 ? <TroopsInfo /> : ""}
                    </div>
                    <div className="playerInfoNavDiv">
                        <br />
                        {this.state.phase !== 1 ? <button id="btnPrev" onClick={this.btnClickHandler}>back</button> : ""}
                        {this.state.phase !== 3 ? <button id="btnNext" className="right" onClick={this.btnClickHandler}>next</button> : ""}
                        {this.state.phase === 3 ? <button id="btnSubmit" className="right" onClick={this.btnClickHandler}>submit</button> : ""}
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPlayers;