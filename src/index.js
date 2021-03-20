import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/styles.css';

const CalcApp = () => (
  <>
    <App />
  </>
);

ReactDOM.render(<CalcApp />, document.getElementById('root'));
