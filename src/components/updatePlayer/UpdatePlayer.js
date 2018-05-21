import React, { Component } from 'react';
import players from '../../shared/PlayersTmpDb';

class UpdatePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            selectedPlayer: "",
            name: "",
            might: "",
            castle25: "",
            guild: "",
            rank: "",
            heroicFighter: "",
            heroicCannoneer: "",
            ancientDrakeRider: "",
            destroyer: "",
            royalGuard: "",
            stealthSniper: "",
            royalCavalry: "",
            fireTrebuchet: "",
            GFPts: ""
        }
    }

    componentDidMount() {
        this.setState({ players })
    }

    selectHandler = (e) => {
        const selectedPlayer = this.state.players.filter(player => {
            return player.name === e.target.value
        })
        this.setState({ selectedPlayer: selectedPlayer[0] })
    }

    changeHandler = (e) => {
    }

    checkboxChangeHandler = (e) => {
    }

    selectchangeHandler = (e) => {
    }

    render() {
        // console.log(this.state);

        return (
            <div className="updatePlayer">
                <select onChange={this.selectHandler} id="">
                    {this.state.players.map((player, key) => {
                        return <option value={player.name} key={key}>{player.name}</option>
                    })}
                </select>
                {/* <form>
                    <div className="left">
                        <div className="addPlayerNameDiv">
                            <p>Name</p>
                            <input id="name" type="text" onChange={this.changeHandler} placeholder="e.g. Uncle Duck" />
                        </div>
                        <div className="addPlayerMightDiv">
                            <p>Might</p>
                            <input id="might" type="number" onChange={this.changeHandler} placeholder="e.g. 100000000" />
                        </div>
                        <div className="addPlayerTimeZoneDiv">
                            <p>Time Zone</p>
                            <select onChange={this.selectchangeHandler} id="sign">
                                <option value="+">+</option>
                                <option value="-">-</option>
                            </select>
                            <input id="timeZone" type="number" onChange={this.changeHandler} placeholder="e.g. 4" />
                        </div>
                        <div className="addPlayerCastleDiv">
                            <label>
                                <input id="castle25" type="checkbox" onChange={this.checkboxChangeHandler} />
                                <span className="label-text">Castle 25</span>
                            </label>
                        </div>
                    </div>

                    <div className="right">
                        <div className="addPlayerGuildDiv">
                            <p>Guild Rank and Name</p>
                            <select onChange={this.changeHandler} id="rank">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input id="guild" type="text" onChange={this.changeHandler} placeholder="e.g. V2P" />
                        </div>
                        <div className="addPlayerGFPtsDiv">
                            <p>last GF points</p>
                            <input id="GFPts" type="number" onChange={this.changeHandler} placeholder="e.g. 1234" />
                        </div>
                    </div>

                    <div className="addPlayerTroopsDiv right clear middle">
                        <ul className="left">
                            <li>Tier 4:</li>
                            <br />
                            <li>Heroic Fighter: </li>
                            <li><input id="heroicFighter" type="number" onChange={this.changeHandler} placeholder="e.g. 10" /> </li>
                            <li>Heroic Cannoneer:</li>
                            <li><input id="heroicCannoneer" type="number" onChange={this.changeHandler} placeholder="e.g. 100" /></li>
                            <li>Ancient Drake Rider:</li>
                            <li><input id="ancientDrakeRider" type="number" onChange={this.changeHandler} placeholder="e.g. 1000" /></li>
                            <li>Destroyer:</li>
                            <li><input id="destroyer" type="number" onChange={this.changeHandler} placeholder="e.g. 10000" /></li>
                        </ul>

                        <ul className="right">
                            <li>Tier 3:</li>
                            <br />
                            <li>Royal Guard:</li>
                            <li><input id="royalGuard" type="number" onChange={this.changeHandler} placeholder="e.g. 100000" /></li>
                            <li>Stealth Sniper:</li>
                            <li><input id="stealthSniper" type="number" onChange={this.changeHandler} placeholder="e.g. 1000000" /></li>
                            <li>Royal Cavalry:</li>
                            <li><input id="royalCavalry" type="number" onChange={this.changeHandler} placeholder="e.g. 10000000" /></li>
                            <li>Fire Trebuchet:</li>
                            <li><input id="fireTrebuchet" type="number" onChange={this.changeHandler} placeholder="e.g. 100000000" /></li>
                        </ul>
                    </div>
                </form> */}
            </div>
        );
    }
}

export default UpdatePlayer;