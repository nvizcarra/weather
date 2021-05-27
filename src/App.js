// Add Fragment
import React, { Fragment, useState, useEffect } from 'react';
// Import Header
import Header from './components/Header';
// Import form
import Form from './components/Form';

function App() {

  // Create form main state
  const [ search, saveSearch ] = useState({
      city: '',
      country: ''
  });

  const [query, saveQuery] = useState(false);

  // Extract city and country from search
  const { city, country} = search;
  // Add useEffect
  useEffect(() => {
    console.log(city);
  }, [query]); 


  return (
    // Create Fragment
    <Fragment>
      
      <Header
        title='Weather App React'
      />

      <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form
                  // After creating form main state, pass search and saveSearch to the form component
                  search={search}
                  saveSearch={saveSearch}
                  saveQuery={saveQuery}
                />
              </div>
              <div className="col m6 s12">
                2
              </div>
            </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
