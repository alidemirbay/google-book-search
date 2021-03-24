import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Header from "./components/Header"
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Router>

      <MainNavbar />
      <div className=' container py-4'>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
