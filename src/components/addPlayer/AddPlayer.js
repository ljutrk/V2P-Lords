import React, { Component } from 'react';
import { getFormattedCurrentDate } from '../../shared/utils';

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

    changeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    checkboxHandler = (e) => {
        this.setState({ [e.target.id]: !this.state.castle25 })
    }

    render() {

        return (
            <div className="playerData">
                <form className="playerDataForm">
                    <div className="addPlayerNameDiv">
                        <p>Name</p>
                        <input id="name" type="text" placeholder="" />
                    </div>
                    <div className="addPlayerMightDiv">
                        <p>Might</p>
                        <input id="might" type="number" placeholder="" />
                    </div>
                    <div className="addPlayerCastleDiv">
                        <label>
                            <input id="castle25" type="checkbox" />
                            <span className="label-text">Castle 25</span>
                        </label>
                    </div>
                    <div className="addPlayerTimeZoneDiv">
                        <p>Time Zone</p>
                        <select id="sign">
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                        <input id="timeZone" type="number" placeholder="" />
                    </div>
                </form>
            </div>
            // <form>
            //     <div className="addPlayerGrid">
            //         <div className="addPlayerNameDiv">
            //             <p>Name</p>
            //             <input id="name" type="text" onChange={this.changeHandler} value={this.state.name} placeholder="e.g. Uncle Duck" />
            //         </div>
            //         <div className="addPlayerMightDiv">
            //             <p>Might</p>
            //             <input id="might" type="number" onChange={this.changeHandler} value={this.state.might} placeholder="e.g. 54000321" /><br />
            //         </div>
            //         <div className="addPlayerCastleDiv">
            //             <p>Castle 25</p>
            //             <input id="castle25" type="checkbox" checked={this.state.castle25} onChange={this.checkboxHandler} /><br />
            //         </div>
            //         <div className="addPlayerGuildDiv">
            //             <p>Guild</p>
            //             <input id="guild" type="text" onChange={this.changeHandler} value={this.state.guild} placeholder="e.g. V2P" />
            //         </div>
            //         <div className="addPlayerRankDiv">
            //             <p>Rank</p>
            //             <select id="rank" value={this.state.rank} onChange={this.changeHandler}>
            //                 <option value="1">1</option>
            //                 <option value="2">2</option>
            //                 <option value="3">3</option>
            //                 <option value="4">4</option>
            //                 <option value="5">5</option>
            //             </select>
            //         </div>
            //         <div className="addPlayerTimeZoneDiv">
            //             <p>Time Zone</p>
            //             <select id="sign" value={this.state.sign} onChange={this.changeHandler}>
            //                 <option value="+">+</option>
            //                 <option value="-">-</option>
            //             </select>
            //             <input id="timeZone" type="number" onChange={this.changeHandler} value={this.state.timeZone} placeholder="e.g. 2" />
            //         </div>
            //         <div className="addPlayerTroopsDiv">
            //             <p>Troops</p>
            //             <ul className="modalT4">
            //                 <li>Tier 4:</li>
            //                 <br />
            //                 <li>Heroic Fighter: </li>
            //                 <li><input id="heroicFighter" type="number" onChange={this.changeHandler} value={this.state.heroicFighter} placeholder={"100"} /></li>
            //                 <li>Heroic Cannoneer:</li>
            //                 <li><input id="heroicCannoneer" type="number" onChange={this.changeHandler} value={this.state.heroicCannoneer} placeholder={"1000"} /></li>
            //                 <li>Ancient Drake Rider:</li>
            //                 <li><input id="ancientDrakeRider" type="number" onChange={this.changeHandler} value={this.state.ancientDrakeRider} placeholder={"10000"} /></li>
            //                 <li>Destroyer:</li>
            //                 <li><input id="destroyer" type="number" onChange={this.changeHandler} value={this.state.destroyer} placeholder={"100000"} /></li>
            //             </ul>
            //             <ul className="modalT3">
            //                 <li>Tier 3:</li>
            //                 <br />
            //                 <li>Royal Guard:</li>
            //                 <li><input id="royalGuard" type="number" onChange={this.changeHandler} value={this.state.royalGuard} placeholder={"1000000"} /></li>
            //                 <li>Stealth Sniper:</li>
            //                 <li><input id="stealthSniper" type="number" onChange={this.changeHandler} value={this.state.stealthSniper} placeholder={"10000000"} /></li>
            //                 <li>Royal Cavalry:</li>
            //                 <li><input id="royalCavalry" type="number" onChange={this.changeHandler} value={this.state.royalCavalry} placeholder={"100000000"} /></li>
            //                 <li>Fire Trebuchet:</li>
            //                 <li><input id="fireTrebuchet" type="number" onChange={this.changeHandler} value={this.state.fireTrebuchet} placeholder={"1000000000"} /></li>
            //             </ul>
            //         </div>

            //     </div>
            // </form>
        );
    }
}

export default AddPlayers;