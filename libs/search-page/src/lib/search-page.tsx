import * as React from 'react';
import { Component } from 'react';
import { match } from 'react-router-dom';
import apiService from '../../../home-page/src/lib/api-service';
import { ProductCell } from '@posh/product-cell';

import './search-page.scss';

interface SearchPageParams {
  category: string;
}

interface SearchPageProps {
  match: match<SearchPageParams>
}

interface SearchPageState {
  category: string;
  products?: Array<any>;
}

export class SearchPage extends Component<SearchPageProps, SearchPageState> {
  constructor(props: SearchPageProps) {
    super(props);
    this.state = { category: this.props.match.params.category, products: [] }
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const [ products ] = await Promise.all([ apiService.getProducts() ]);
      this.setState({products});
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return <ProductCell key={index} product={product} />
        })}
      </div>
    );
  }
}
