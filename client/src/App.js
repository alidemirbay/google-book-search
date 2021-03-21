import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Header from "./components/Header"
import "./App.css"
import { Container } from "react-bootstrap";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";


function App() {
  return (
    <Router>

      <MainNavbar />
      <Container>
        <Header />
        <Switch>
          <Route exact path={['/', '/search']} component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </Switch>
      </Container>

    </Router>
  );
}

export default App;
