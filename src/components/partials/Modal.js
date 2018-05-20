import React from 'react';
import { formatBigNumbers } from '../../shared/utils';


const Modal = ({troops, troopsModal, playerName, closeModal}) => {
    
    const clickHandler = () => {
        closeModal()
    }

    return (
        <div id="troopsModal" className={troopsModal ? "modal displayBlock" : "modal displayNone"}>
            <div className="modal-content">
                <span onClick={clickHandler} className="close">&times;</span>
                <p>{playerName}</p>
                <hr />
                <ul className="modalT4">
                    <li>Tier 4:</li>
                    <br />
                    <li>Heroic Fighter: </li>
                    <li>{formatBigNumbers(troops.heroicFighter)} </li>
                    <li>Heroic Cannoneer:</li>
                    <li>{formatBigNumbers(troops.heroicCannoneer)}</li>
                    <li>Ancient Drake Rider:</li>
                    <li>{formatBigNumbers(troops.ancientDrakeRider)}</li>
                    <li>Destroyer:</li>
                    <li>{formatBigNumbers(troops.destroyer)}</li>
                </ul>
                
                <ul className="modalT3">
                    <li>Tier 3:</li>
                    <br />
                    <li>Royal Guard:</li>
                    <li>{formatBigNumbers(troops.royalGuard)}</li>
                    <li>Stealth Sniper:</li>
                    <li>{formatBigNumbers(troops.stealthSniper)}</li>
                    <li>Royal Cavalry:</li>
                    <li>{formatBigNumbers(troops.royalCavalry)}</li>
                    <li>Fire Trebuchet:</li>
                    <li>{formatBigNumbers(troops.fireTrebuchet)}</li>
                </ul>
            </div>
        </div>
    );
}

export default Modal;