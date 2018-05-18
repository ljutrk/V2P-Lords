import React, { Component } from 'react';
import players from './PlayersTmpDb';
import PlayerRow from './PlayerRow';
import Search from './Search';
import { playerNameFilter } from './utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            filteredPlayers: [],
            searchInput: ""
        }
    }

    componentDidMount() {
        this.setState({
            filteredPlayers: players
        });

    }

    searchHandler = (searchInput) => {
        const filteredPlayersByName = playerNameFilter(players, searchInput);
        this.setState({
            searchInput,
            filteredPlayers: filteredPlayersByName
        });
    }

    render() {

        return (
            <div className="container">
                <div className="homeDiv">
                    <Search searchHandler={this.searchHandler} />
                    {this.state.filteredPlayers.map((player, key) => <PlayerRow key={key} player={player} index={key} />)}
                </div>
            </div>
        );
    }
}

export default Home;