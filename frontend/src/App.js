import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MailList from "./components/MailList";
import NewMail from "./components/NewMail";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  console.log("Frontend run")

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/mail-list">
                <MailList />
              </Route>
              <Route exact path="/new">
                <NewMail />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

