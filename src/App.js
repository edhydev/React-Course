import React from 'react';
import FruitCard from './components/FruitCard';

const App = () => {
  return (
    <div>
      <FruitCard name="Apple" price={12.13} />
      <FruitCard name="Banana" price={13.56} />
      <FruitCard name="Orange" price={16.2} />
    </div>
  );
};

export default App;
