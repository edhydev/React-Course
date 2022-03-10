import React from 'react';
import './FruitCard.css';

class FruitCard extends React.Component {
  constructor() {
    super();

    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);
    this.clean = this.clean.bind(this);

    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reduce = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  clean = () => {
    this.setState({ count: 0 });
  };

  render() {
    const hasItems = this.state.count > 0;
    const classStyle = `FruitCard ${hasItems ? 'FruitCard-active' : ''}`;
    return (
      <div className={classStyle}>
        <h1>{this.props.name}</h1>
        <p>Amount: {this.state.count}</p>
        <hr />
        <button onClick={this.add}>+</button>
        <button onClick={this.reduce}>-</button>
        <button onClick={this.clean}>Clean</button>
        <p>$ {this.props.price}</p>
        <p>Total Amount: $ {this.props.price * this.state.count}</p>
      </div>
    );
  }
}

export default FruitCard;
