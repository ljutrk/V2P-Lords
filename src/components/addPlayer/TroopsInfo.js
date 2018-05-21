import React from 'react';

const TroopsInfo = () => {

    const changeHandler = () => {

    }

    return (
        <div className="addPlayerTroopsDiv">
            <ul className="left">
                <li>Tier 4:</li>
                <br />
                <li>Heroic Fighter: </li>
                <li><input id="heroicFighter" type="number" onChange={changeHandler} placeholder="e.g. 10" /> </li>
                <li>Heroic Cannoneer:</li>
                <li><input id="heroicCannoneer" type="number" onChange={changeHandler} placeholder="e.g. 100" /></li>
                <li>Ancient Drake Rider:</li>
                <li><input id="ancientDrakeRider" type="number" onChange={changeHandler} placeholder="e.g. 1000" /></li>
                <li>Destroyer:</li>
                <li><input id="destroyer" type="number" onChange={changeHandler} placeholder="e.g. 10000" /></li>
            </ul>

            <ul className="right">
                <li>Tier 3:</li>
                <br />
                <li>Royal Guard:</li>
                <li><input id="royalGuard" type="number" onChange={changeHandler} placeholder="e.g. 100000" /></li>
                <li>Stealth Sniper:</li>
                <li><input id="stealthSniper" type="number" onChange={changeHandler} placeholder="e.g. 1000000" /></li>
                <li>Royal Cavalry:</li>
                <li><input id="royalCavalry" type="number" onChange={changeHandler} placeholder="e.g. 10000000" /></li>
                <li>Fire Trebuchet:</li>
                <li><input id="fireTrebuchet" type="number" onChange={changeHandler} placeholder="e.g. 100000000" /></li>
            </ul>
        </div>
    );
}

export default TroopsInfo;