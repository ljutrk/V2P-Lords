import React from 'react';

const FilterSelect = ({filterClickHandler, filter, filterDropdown}) => {

    const clickHandler = (e) => {
        filterClickHandler(e)        
    }

    return (
        <div className="selectDiv">
            <button onClick={clickHandler}>
                {filter ? filter : "Filter Players"}
            </button>
            <div className={filterDropdown ? "filterDropdownDiv" : "filterDropdownDiv displayNone"}>
                <p id="rank" onClick={clickHandler}>Rank</p>
                <p id="name" onClick={clickHandler}>Name</p>
                <p id="might" onClick={clickHandler}>Might</p>
                <p id="totalTroops" onClick={clickHandler}>Total Troops</p>
            </div>
        </div>
    );
}

export default FilterSelect;