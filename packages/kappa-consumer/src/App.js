import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/* REDUX */
import store from './config/store';

/* STYLES */
import MyThemeProvider from './app.styles';

/* ROUTES */
import Routes from './routes';

/* COMPONENTS */
import PrimaryLayout from './components/organisms/primaryLayout';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MyThemeProvider>
          <PrimaryLayout>
            <Routes />
          </PrimaryLayout>
        </MyThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;

