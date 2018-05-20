import React, { Component } from 'react';
import { speedupObject, initialState } from "../../shared/constants";
import SpeedupInputDiv from './SpeedupInputDiv';
import { getTotalSpeedupTime, formattedSpeedupTime } from '../../shared/utils';

class SpeedupCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            m1: "",
            m3: "",
            m5: "",
            m10: "",
            m15: "",
            m30: "",
            m60: "",
            m180: "",
            m480: "",
            m900: "",
            m1440: "",
            m4320: "",
            m10080: "",
            m43200: "",
            totalTime: 0,
        }
    }

    inputChangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });

    }

    reset = (e) => {
        this.setState(initialState)

    }

    render() {
        let totalSpeedupTime = getTotalSpeedupTime(this.state)
        console.log(totalSpeedupTime)
        return (
            <div className="speedupCounter">
                <div className="speedupCounterGrid">
                    {speedupObject.map((type, key) => <SpeedupInputDiv key={key} type={type} inputChangeHandler={this.inputChangeHandler} state={this.state} />)}
                    <div className="totalTimeDiv">
                        <p>Total Time:</p><br />
                        <p>{formattedSpeedupTime(totalSpeedupTime)}</p><br />
                        <button onClick={this.reset}>reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeedupCounter;