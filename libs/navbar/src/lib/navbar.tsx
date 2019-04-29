import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

import './navbar.scss';

interface Category {
  title: string;
  url: string;
}

interface NavbarProps {
  homePage?: boolean;
}

interface NavbarState {
  categories?: Array<Category>;
}

export class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps){
    super(props);
  }

  render() {
    const centeredStyle = {
      padding: '0',
    }

    return (
        <div className="navbar" style={this.props.homePage ? centeredStyle : null}>
          <Link to="/" className={"logo " + (this.props.homePage ? 'navbar__logo--centered' : null)}>POSHMARK</Link>
        </div>
    );
  }
}
