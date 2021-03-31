import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const btnOperators = {
  1: ['AC', '+/-', '%', '÷'],
  2: ['7', '8', '9', 'x'],
  3: ['4', '5', '6', '-'],
  4: ['1', '2', '3', '+'],
  5: ['0', '.', '='],
};

const ButtonPanel = ({ handleClick }) => (
  <div className="btns">
    <div className="btn__group">
      {btnOperators[1].map((op) => <Button name={op} onClick={handleClick} key={op} />)}
    </div>
    <div className="btn__group">
      {btnOperators[2].map((op) => <Button name={op} onClick={handleClick} key={op} />)}
    </div>
    <div className="btn__group">
      {btnOperators[3].map((op) => <Button name={op} onClick={handleClick} key={op} />)}
    </div>
    <div className="btn__group">
      {btnOperators[4].map((op) => <Button name={op} onClick={handleClick} key={op} />)}
    </div>
    <div className="btn__group">
      {btnOperators[5].map((op) => <Button name={op} onClick={handleClick} key={op} />)}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
