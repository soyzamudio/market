import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

import './popular-brand.scss';

export interface IPopularBrand {
  image: string;
  title: string;
  url: string;
}

interface PopularBrandProps {
  brand: IPopularBrand;
}

export class PopularBrand extends Component<PopularBrandProps, any> {
  constructor(props: PopularBrandProps) {
    super(props);
  }

  render() {
    const dStyle = {
      background: `linear-gradient(rgba(121, 121, 121, .20), rgba(68, 68, 68, .20)), url(${this.props.brand.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <Link to={this.props.brand.url} className="popular-brand" style={dStyle}>
        {this.props.brand.title}
      </Link>
    );
  }
}
