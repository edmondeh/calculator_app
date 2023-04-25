import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes';
import auth from './routes/auth';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            {routes}
            {auth}
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
