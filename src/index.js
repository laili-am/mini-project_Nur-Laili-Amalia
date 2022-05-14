import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { ApolloProvider } from "@apollo/client";
import { client } from '../src/components/apollo-client';

const store = configureStore({
  reducer: {

  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
