import * as React from 'react';
import { Component } from 'react';

import './section-subheader.scss';

interface SectionSubheaderProps {
  title: string;
}

export class SectionSubheader extends Component<SectionSubheaderProps, any> {
  
  render() {
    return (
      <div className="section-subheader">{this.props.title}</div>
    );
  }
}
