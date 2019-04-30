import * as React from 'react';
import { Component } from 'react';

import './product-cell.scss';

interface ProductCellProps {
  product: any;
}

export class ProductCell extends Component<ProductCellProps, any> {
  constructor(props: ProductCellProps) {
    super(props);
  }

  render() {
    return (
      <div className="product-cell">
        <div className="product-cell__image">
        </div>
        <div>{this.props.product.title}</div>
        <div className="product-cell__price">
          <span>{this.props.product.priceLabel}</span> <span className="product-cell__price--strikethrough"></span>
        </div>
        {/* <div>
          Size: {this.props.product.sizes.map((size, index) => <span key={index}>{size.name}</span>)}
        </div> */}
      </div>
    );
  }
}
