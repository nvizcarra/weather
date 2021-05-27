import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({outcome}) => {

    // Extract values
    const { name, main } = outcome;
        
    if(!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name} weather: </h2>
                <p className="temperature">
                    { parseFloat (main.temp - kelvin, 10).toFixed(2) } <span> &#x2103;</span>
                </p>
                <p>Maximum:
                    { parseFloat (main.temp_max - kelvin, 10).toFixed(2) } <span> &#x2103;</span>
                </p>
                <p>Minimum:
                    { parseFloat (main.temp_min - kelvin, 10).toFixed(2) } <span> &#x2103;</span>
                </p>
            </div>
        </div>
    );
}

Weather.propTypes = {
    outcome: PropTypes.object.isRequired
}
export default Weather;