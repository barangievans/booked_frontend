import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css'; // Make sure this is the correct CSS file
import App from './App';
import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store'; // Your Redux store
import reportWebVitals from './reportWebVitals'; // Web Vitals for performance measurement

// Create a root with React 18+ API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Redux store */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
