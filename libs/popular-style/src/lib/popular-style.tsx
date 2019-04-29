import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './popular-style.scss';

export interface IPopularStyle {
  image: string;
  title: string;
  url: string;
}

interface PopularStyleProps {
  style: IPopularStyle;
}

export class PopularStyle extends Component<PopularStyleProps, any> {
  constructor(props: PopularStyleProps) {
    super(props);
  }

  render() {
    const dStyle = {
      background: `linear-gradient(rgba(121, 121, 121, .20), rgba(68, 68, 68, .20)), url(${this.props.style.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <Link to={this.props.style.url} className="popular-style" style={dStyle}>
        <span className="popular-style__title">{this.props.style.title}</span>
      </Link>
    );
  }
}
