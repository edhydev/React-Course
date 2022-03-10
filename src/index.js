import React from 'react';
import ReactDOM from 'react-dom';

const FruitCard = () => {
  return (
    <div>
      <h1>Fruit</h1>
      <hr />
      <p>Description ...</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FruitCard />
      <FruitCard></FruitCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
