import * as React from "react";
import { Component } from "react";
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom';

import { HomePage } from '@posh/home-page';
import { SearchPage } from '@posh/search-page';
import { Navbar } from '@posh/navbar';
import { Footer } from '@posh/footer';

import "./app.scss";

const history = createBrowserHistory();

export class App extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className="app">
          <div className="app-content">
            <Navbar homePage={history.location.pathname === '/'} />
            <Route path="/" exact component={HomePage} />
            <Route path="/l/:category?" component={SearchPage} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
