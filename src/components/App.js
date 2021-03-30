import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState(null);

  const handleClick = btnName => {
    calculate({
      total, setTotal, next, setNext, operation, setOperation,
    }, btnName);
  };

  return (
    <div className="calculator">
      <Display total={total} next={next} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
