import React, { Fragment } from 'react';
import { getTroopCount, getLocalTime, formatBigNumbers } from './utils';

const PlayerRow = ({ player, index, modalOpener }) => {


    // const currentDate = new Date();
    // const templejt = currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear()
    // console.log(templejt);
    const troopsClickHandler = () => {
        modalOpener(player.troops, player.name)

    }
    return (
        <Fragment>
            <div className="playerRow">
                <div className="playerRowGrid">
                    <div className="">
                        <p id="tablePosition"> {(index + 1) + "."}</p>
                    </div>
                    <div className="">
                        <p>Player:</p>
                        <p>{player.name}</p>
                    </div>
                    <div className="">
                        <p>Castle level:</p>
                        <p>{player.castle25 ? "25" : "<25"}</p>
                    </div>
                    <div className="">
                        <p>Rank:</p>
                        <p>{player.rank}</p>
                    </div>
                    <div className="">
                        <p>Might:</p>
                        <p>{formatBigNumbers(player.might)}</p>
                    </div>
                    <div>
                        <p>Total troops:</p>
                        <p className="totalTroopsP" onClick={troopsClickHandler}>{formatBigNumbers(getTroopCount(player.troops))}</p>
                        {/* <img id="troopsDetails" src="http://downloadicons.net/sites/default/files/eye-icon-75805.png" /> */}
                    </div>
                    <div className="">
                        <p>Local time:</p>
                        <p>{getLocalTime(player.timeZone)} </p>
                    </div>
                    <div className="">
                        <p>Last Update:</p>
                        <p>{player.lastUpdate}</p>
                    </div>
                </div>
                
            </div>
            
        </Fragment>
    );
}

export default PlayerRow;