// Add Fragment
import React, { Fragment } from 'react';
// Import Header
import Header from './components/Header';
// Import form
import Form from './components/Form';

function App() {
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
                <Form/>
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
