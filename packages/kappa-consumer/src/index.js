import React from 'react';
import ReactDOM from 'react-dom';

/* REDUX */
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';

/* COMPONENTS */
import App from './App';

const RootApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <RootApp /> 
  </React.StrictMode>,
  document.getElementById('react-root')
);
