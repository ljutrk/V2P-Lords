import React from 'react';
import { getTroopCount } from './utils';

const PlayerRow = ({player, index}) => {

    console.log();
    
    
    return (
        <div className="playerRow">
            <div className="playerRowGrid">
                <p>{(index + 1)+"."}</p>
                <p>{player.name}</p>
                <p>Castle level: {player.castle25 ? "25" : "<25"}</p>
                <p>Rank: {player.rank}</p>
                <p>Might: {player.might}</p>
                <p>Total troops: {getTroopCount(player.troops)}</p>
                <p>Local time:  </p>
                <p>Last Update: </p>
            </div>
        </div>
    );
}

export default PlayerRow;