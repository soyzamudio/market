import * as React from 'react';
import { Component } from 'react';

import './section-header.scss';

interface ISectionHeader {
  title: string;
}

export class SectionHeader extends Component<ISectionHeader, any> {
  constructor(props: ISectionHeader) {
    super(props);
  }

  render() {
    return (
      <div className="section-header">
        {this.props.title}
      </div>
    );
  }
}
