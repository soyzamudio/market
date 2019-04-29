import * as React from 'react';
import { Component } from 'react';
import { match } from 'react-router-dom';

import './search-page.scss';

interface SearchPageParams {
  category: string;
}

interface SearchPageProps {
  match: match<SearchPageParams>
}

interface SearchPageStae {
  category: string;
}

export class SearchPage extends Component<SearchPageProps, SearchPageStae> {
  constructor(props: SearchPageProps) {
    super(props);
    this.state = { category: this.props.match.params.category }
  }

  render() {
    return <div>search-page works!</div>;
  }
}
