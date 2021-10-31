import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Routes from '../router/Routes';
import Provider from './Provider/Provider';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
