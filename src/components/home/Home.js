import React, { Component } from 'react';
import players from '../../shared/PlayersTmpDb';
import { playerNameFilter, filterFunctions } from '../../shared/utils';
import Modal from '../partials/Modal';
import Search from '../partials/Search';
import PlayerRow from './PlayerRow';
import FilterSelect from '../partials/FilterSelect';

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
        const filteredPlayers = players.sort(filterFunctions.rank);
        this.setState({ filteredPlayers });
    }

    searchHandler = (searchInput) => {
        const filteredPlayersByName = playerNameFilter(players, searchInput);
        this.setState({
            searchInput,
            filteredPlayers: filteredPlayersByName
        });
    }

    filterClickHandler = (e) => {
        this.setState({
            filterDropdown: !this.state.filterDropdown,
            filteredPlayers: players.sort(filterFunctions[e.target.id]),
            filter: e.target.textContent
        });
    }

    modalOpener = (playerTroops, playerName) => {
        this.setState({
            troopsModal: true,
            playerTroopsForModal: playerTroops,
            playerNameForModal: playerName
        });
    }

    closeModal = () => {
        this.setState({ troopsModal: false });
    }

    render() {

        return (
            <div className="home">
                <Modal troops={this.state.playerTroopsForModal} troopsModal={this.state.troopsModal} playerName={this.state.playerNameForModal} closeModal={this.closeModal} />
                <Search searchHandler={this.searchHandler} />
                <FilterSelect filterClickHandler={this.filterClickHandler} filter={this.state.filter} filterDropdown={this.state.filterDropdown} />
                {this.state.filteredPlayers.map((player, key) => <PlayerRow key={key} player={player} index={key} modalOpener={this.modalOpener} />)}
            </div>
        );
    }
}

export default Home;