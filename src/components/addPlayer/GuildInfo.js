import React, { Fragment } from 'react';

const GuildInfo = ({ inputHandler }) => {

    const changeHandler = (e) => {
        inputHandler(e)
    }

    return (
        <Fragment>
            <div className="addPlayerGuildDiv">
                <p>Guild Rank and Name</p>
                <select onChange={changeHandler} id="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input id="guild" type="text" onChange={changeHandler} placeholder="e.g. V2P" />
            </div>
            <div className="addPlayerGFPtsDiv">
                <p>last GF points</p>
                <input id="GFPts" type="number" onChange={changeHandler} placeholder="e.g. 1234" />
            </div>
        </Fragment>
    );
}

export default GuildInfo;