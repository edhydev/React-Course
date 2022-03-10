import React from 'react';
import ReactDOM from 'react-dom';

const FruitCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <hr />
      <p>$ {props.price}</p>
    </div>
  );
};

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
