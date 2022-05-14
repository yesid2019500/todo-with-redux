import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import './style.css';

// chakra UI

import { ChakraProvider } from '@chakra-ui/react'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </Provider>
  
  
);


