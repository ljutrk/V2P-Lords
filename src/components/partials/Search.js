import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    changeHandler = (e) => {
        this.setState({ searchInput: e.target.value });
        this.props.searchHandler(e.target.value);
    }

    render() {
        
        return (
            <div className="searchDiv">
                <img className="searchIcon" src="http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png" alt="searchIcon" />
                <input className="searchInput" type="text" value={this.state.searchInput} onChange={this.changeHandler} placeholder="Search players by name..." />
            </div>
        );
    }
}

export default Search;