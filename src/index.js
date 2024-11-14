import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
=======
import ReactDOM from 'react-dom/client'; // Use this for React 18+
import './index.css'; // Or 'App.css' if that was your intention
import App from './App';
import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store'; // Your store
import reportWebVitals from './reportWebVitals';

// Create a root with React 18+ API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap App in Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
>>>>>>> temp-branch
