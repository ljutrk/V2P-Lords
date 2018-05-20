import React, { Fragment } from 'react';
import { getTroopCount, getLocalTime, formatBigNumbers } from '../../shared/utils';

const PlayerRow = ({ player, index, modalOpener }) => {

    const troopsClickHandler = () => {
        modalOpener(player.troops, player.name)
    }

    return (
        <div className="playerRowDiv">
            <div className="playerRowGrid">
                <div>
                    <p id="tablePosition"> {(index + 1) + "."}</p>
                </div>
                <div>
                    <p>Player:</p>
                    <p>{player.name}</p>
                </div>
                <div>
                    <p>Castle level:</p>
                    <p>{player.castle25 ? "25" : "<25"}</p>
                </div>
                <div>
                    <p>Rank:</p>
                    <p>{player.rank}</p>
                </div>
                <div>
                    <p>Might:</p>
                    <p>{formatBigNumbers(player.might)}</p>
                </div>
                <div>
                    <p>Total troops:</p>
                    <p className="totalTroopsP" onClick={troopsClickHandler}>{formatBigNumbers(getTroopCount(player.troops))}</p>
                </div>
                <div>
                    <p>Local time:</p>
                    <p>{getLocalTime(player.timeZone)} </p>
                </div>
                <div>
                    <p>Last Update:</p>
                    <p>{player.lastUpdate}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerRow;