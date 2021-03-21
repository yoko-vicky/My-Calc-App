import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    <ButtonPanel onClick={calculate} />
  </>
);

export default App;
