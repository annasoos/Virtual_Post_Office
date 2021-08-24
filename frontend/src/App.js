import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MailList from "./components/MailList";
import NewMail from "./components/NewMail";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Header from "./components/Header";
import stamp from "./media/stamp.png";

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
                <HomePageFunction />
              </Route>
              <Route exact path="/mail-list">
                <ListMailsFunction />
              </Route>
              <Route exact path="/new">
                <NewMailFunction />
              </Route>
              <Route exact path="/search">
                <SearchFunction />
              </Route>
            </Switch>
            <img src={stamp} alt="vintage stamp"></img>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

function HomePageFunction() {
  return (
    <>
      <HomePage />
    </>
  );
};

function ListMailsFunction() {
  return (
    <>
      <MailList />
    </>
  );
};

function NewMailFunction() {
  return (
    <>
      <NewMail />
    </>
  );
};

function SearchFunction() {
  return (
    <>
      <Search />
    </>
  );
};

export default App;

