// Add Fragment
import React, { Fragment, useState, useEffect } from 'react';
// Import Header
import Header from './components/Header';
// Import form
import Form from './components/Form';
// import weather
import Weather from './components/Weather';
// Import error
import Error from './components/Error';

function App() {

  // Create form main state
  const [ search, saveSearch ] = useState({
      city: '',
      country: ''
  });

  const [query, saveQuery] = useState(false);

  // Create a third state
  const [outcome, saveOutcome] = useState({});

  // Creat a fourth state
  const [error, saveError] = useState(false);

  // Extract city and country from search
  const { city, country } = search;
  // Add useEffect
  useEffect(() => {
      const queryAPI = async () => {

        if(query) {
          const appId = '6ecfe0cc11ebd71a312b777485b216f5';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
          const answer = await fetch(url);
          const outcome = await answer.json();
  
          saveOutcome(outcome);

          saveQuery(false);

          // Detect if there are succesful results after the query
          if(outcome.cod === "404") {
            saveError(true);
          } else {
            saveError(false);
          }
        }
      }
      queryAPI();
      // eslint-disable-next-line
  }, [query]); 
  
  let component;
  if(error) {
    component = <Error message="No results" />
  } else {
    component = <Weather
                    outcome={outcome}
                />
  }

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
                  {component}
              </div>
            </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
