import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Routes from "../router/Routes";
import BlocksProvider from "../contexts/BlocksProvider";

function App() {
  return (
    <BrowserRouter>
      <BlocksProvider>
        <Header />
        <Routes />
      </BlocksProvider>
    </BrowserRouter>
  );
}
export default App;
