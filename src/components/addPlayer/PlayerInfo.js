import React from 'react';

const PlayerInfo = ({ inputHandler, checkboxHandler }) => {

    const changeHandler = (e) => {
        inputHandler(e)
    }

    const checkboxChangeHandler = (e) => {
        checkboxHandler(e)
    }

    const selectchangeHandler = (e) => {
        inputHandler(e)        
    }

    return (
        <div className="playerInfo">
            <form className="playerInfoForm">
                <div className="addPlayerNameDiv">
                    <p>Name</p>
                    <input id="name" type="text" onChange={changeHandler} placeholder="e.g. Uncle Duck" />
                </div>
                <div className="addPlayerMightDiv">
                    <p>Might</p>
                    <input id="might" type="number" onChange={changeHandler} placeholder="e.g. 100000000" />
                </div>
                <div className="addPlayerTimeZoneDiv">
                    <p>Time Zone</p>
                    <select onChange={selectchangeHandler} id="sign">
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input id="timeZone" type="number" onChange={changeHandler} placeholder="e.g. 4" />
                </div>
                <div className="addPlayerCastleDiv">
                    <label>
                        <input id="castle25" type="checkbox" onChange={checkboxChangeHandler} />
                        <span className="label-text">Castle 25</span>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default PlayerInfo;