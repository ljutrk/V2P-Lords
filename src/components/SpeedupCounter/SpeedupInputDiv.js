import React from 'react';
import { speedupText } from '../../shared/utils';

const SpeedupInputDiv = ({type, inputChangeHandler, state}) => {
    const speedupType = type.speedup
    const speedupTypeNumber = parseInt(type.speedup);

    const changeHandler = (e) => {
        inputChangeHandler(e);
    }

    return (
        <div className={`m${speedupType}`}>
            <p>{speedupText(speedupTypeNumber)}</p>
            <input id={`m${speedupType}`} type="number" onChange={changeHandler} value={state[`m${speedupType}`]} />
        </div>
    )
}

export default SpeedupInputDiv;