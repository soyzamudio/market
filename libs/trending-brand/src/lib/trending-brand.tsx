import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './trending-brand.scss';

export interface ITrendingBrand {
  title: string;
  url: string;
}

interface TrendingBrandProps {
  brand: ITrendingBrand;
  ranking: number;
}

export class TrendingBrand extends Component<TrendingBrandProps, any> {
  constructor(props: TrendingBrandProps) {
    super(props);
  }

  render() {
    return (
      <div className="trending-brand">
        <div className="trending-brand__ranking">{this.props.ranking}</div>
        <Link to={this.props.brand.url} className="trending-brand__title">{this.props.brand.title}</Link>
      </div>
    );
  }
}
