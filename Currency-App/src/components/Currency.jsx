import React from 'react';
import '../currency.css';
import { FaArrowRight } from 'react-icons/fa';

function Currency() {
    return (
        <div className="currency-div">
            <div
                style={{
                    color: 'white',
                    marginTop: '-20px',
                    fontFamily: 'Arial',
                }}
            >
                <h3>Exchange Rate Application</h3>
            </div>

            <div className="input-div">
                <input type="number" className="amount" />
                <select className="from-currency-option">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaArrowRight className="arrow" />
                <select className="to-currency-option">
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>

                <input type="number" className="result" />
            </div>
            <div>
                <button className='button'>Convert</button>
            </div>
        </div>
    );
}

export default Currency;
