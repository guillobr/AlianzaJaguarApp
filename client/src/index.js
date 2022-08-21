import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <Auth0Provider
        domain='dev-kqqzo4r5.us.auth0.com'
        clientId='2Fmvbvadfex143QLgGaP3dFV2ltMDw1f'
        redirectUri={window.location.origin}
      >
          <App />
  </Auth0Provider>
    
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
