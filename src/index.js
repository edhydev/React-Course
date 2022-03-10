import React from 'react';
import ReactDOM from 'react-dom';

class FruitCard extends React.Component {
  constructor() {
    super();

    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);

    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  reduce = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Count: {this.state.count}</p>
        <hr />
        <button onClick={this.add}>+</button>
        <button onClick={this.reduce}>-</button>
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <FruitCard name="Apple" price={12.13} />
      <FruitCard name="Banana" price={13.56} />
      <FruitCard name="Orange" price={16.2} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
