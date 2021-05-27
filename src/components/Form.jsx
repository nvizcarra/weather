import React, {useState} from 'react';

const Form = () => {

    // Form state
    const [search, saveSearch] = useState ({
        city: '',
        country: ''
    })

    // Extract city and country
    const { city, country } = search;

    // Function which puts elements into the state
    const handleChange = e => {
        // Update state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    return (

        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                        <option value="">-- Select a country --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>

                </select>
                <label htmlFor="country">Country: </label>
            </div>
        </form>
    );
}

export default Form;