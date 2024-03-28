import React from 'react';
import '../currency.css';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

let Base_URL = 'https://api.freecurrencyapi.com/v1/latest';
let Api_Key = 'fca_live_vZs9hmPhzY6VCh8mDBoWIpX9ZE38z5zBWY4mCghn';

function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(
            `${Base_URL}?apikey=${Api_Key}&base_currency=${fromCurrency}`
        );
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    };

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
                <input
                    type="number"
                    className="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <select
                    className="from-currency-option"
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaArrowRight className="arrow" />
                <select
                    className="to-currency-option"
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>

                <input
                    type="number"
                    className="result"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                />
            </div>
            <div>
                <button className="button" onClick={exchange}>
                    Convert
                </button>
            </div>
        </div>
    );
}

export default Currency;
