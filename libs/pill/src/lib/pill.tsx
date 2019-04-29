import * as React from 'react';
import { Component } from 'react';

import './pill.scss';

export interface IPill {
  active?: boolean;
  title: string;
}

export class Pill extends Component<IPill, any> {
  constructor(props: IPill) {
    super(props);
  }

  render() {
    return (
      <div className={'pill ' + (this.props.active ? 'pill--active' : null)}>
        {this.props.title}
      </div>
    );
  }
}
