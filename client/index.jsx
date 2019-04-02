import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const getHomes = (currentHome) => {
  return fetch('http://zallosimilarhomesservice-env.3cy6gkds47.us-east-2.elasticbeanstalk.com/similarHomes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(currentHome)
  });
};

ReactDOM.render(<App getHomes={getHomes}/>, document.getElementById('similar-homes'));
