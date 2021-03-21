import React from "react";
import MainNavbar from './components/MainNavbar';
import Header from './components/Header';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from "./components/SearchForm";

function App() {
  return (

    <div>


      <MainNavbar />
      <Header />
      <SearchForm />

    </div>

  );
}

export default App;
