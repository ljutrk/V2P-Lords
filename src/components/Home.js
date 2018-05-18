import React, { Component } from 'react';
import players from './PlayersTmpDb';
import PlayerRow from './PlayerRow';
import Search from './Search';
import { playerNameFilter, filterFunctions, formatBigNumbers } from './utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            filteredPlayers: [],
            searchInput: "",
            filterDropdown: false,
            filter: "",
            troopsModal: false,
            playerTroopsForModal: {},
            playerNameForModal: ""
        }
    }

    componentDidMount() {
        this.setState({
            filteredPlayers: players.sort(filterFunctions.rank)
        })
    }

    searchHandler = (searchInput) => {
        const filteredPlayersByName = playerNameFilter(players, searchInput);
        this.setState({
            searchInput,
            filteredPlayers: filteredPlayersByName
        });
    }

    clickHandler = (e) => {
        // this.setState({filteredPlayers: players.sort(filterFunctions[e.target.id]) })
        // console.log(e.target.value);
    }

    filterClickHandler = (e) => {
        this.setState({
            filterDropdown: !this.state.filterDropdown,
            filteredPlayers: players.sort(filterFunctions[e.target.id]),
            filter: e.target.textContent
        })

    }

    filterBtn = (a) => {
        return a ? a : "Filter Players"
    }

    modalOpener = (playerTroops, playerName) => {
        this.setState({
            troopsModal: true,
            playerTroopsForModal: playerTroops,
            playerNameForModal: playerName
        })
    }

    closeModal = () => {
        this.setState({ troopsModal: false })
    }

    render() {
        const troops = this.state.playerTroopsForModal

        return (
            <div className="container">
                {/* <div id="troopsModal" className="modal"> */}
                <div id="troopsModal" className={this.state.troopsModal ? "modal displayBlock" : "modal displayNone"}>
                    <div className="modal-content">
                        <span onClick={this.closeModal} className="close">&times;</span>
                        <p>{this.state.playerNameForModal}</p>
                        <hr />
                        <ul className="modalT4">
                            <li>Tier 4:</li>
                            <br />
                            <li>Heroic Fighter: </li>
                            <li>{formatBigNumbers(troops.heroicFighter)} </li>
                            <li>Heroic Cannoneer:</li>
                            <li>{formatBigNumbers(troops.heroicCannoneer)}</li>
                            <li>Ancient Drake Rider:</li>
                            <li>{formatBigNumbers(troops.ancientDrakeRider)}</li>
                            <li>Destroyer:</li>
                            <li>{formatBigNumbers(troops.destroyer)}</li>
                        </ul>
                        <ul className="modalT3">
                            <li>Tier 3:</li>
                            <br />
                            <li>Royal Guard:</li>
                            <li>{formatBigNumbers(troops.royalGuard)}</li>
                            <li>Stealth Sniper:</li>
                            <li>{formatBigNumbers(troops.stealthSniper)}</li>
                            <li>Royal Cavalry:</li>
                            <li>{formatBigNumbers(troops.royalCavalry)}</li>
                            <li>Fire Trebuchet:</li>
                            <li>{formatBigNumbers(troops.fireTrebuchet)}</li>
                        </ul>
                    </div>
                </div>
                <div className="homeDiv">
                    <Search searchHandler={this.searchHandler} />
                    <div className="selectDiv">
                        <button onClick={this.filterClickHandler}>
                            {this.filterBtn(this.state.filter)}
                        </button>
                        <div className={this.state.filterDropdown ? "filterDropdownDiv" : "filterDropdownDiv displayNone"}>
                            <p id="rank" onClick={this.filterClickHandler}>Rank</p>
                            <p id="name" onClick={this.filterClickHandler}>Name</p>
                            <p id="might" onClick={this.filterClickHandler}>Might</p>
                            <p id="totalTroops" onClick={this.filterClickHandler}>Total Troops</p>
                        </div>
                    </div>
                    {this.state.filteredPlayers.map((player, key) => <PlayerRow key={key} player={player} index={key} modalOpener={this.modalOpener} />)}
                </div>
            </div>
        );
    }
}

export default Home;