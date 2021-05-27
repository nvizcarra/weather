import React from 'react';

const Weather = ({outcome}) => {

    // Extract values
    const { name, main } = outcome;
        
    if(!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h1>{name} weather: </h1>
                <p className="temperature">
                    { parseFloat (main.temp - kelvin, 10).toFloat(2) } <span> &#x2103;</span>
                </p>
                <p>Maximum:
                    { parseFloat (main.temp_max - kelvin, 10).toFloat(2) } <span> &#x2103;</span>
                </p>
                <p>Minimum:
                    { parseFloat (main.temp_min - kelvin, 10).toFloat(2) } <span> &#x2103;</span>
                </p>
            </div>
        </div>
    );
}

export default Weather;