import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, className }) => (
  <button type="button" onClick={() => onClick(name)} className={className}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: null,
  onClick: null,
  className: 'btn button',
};

export default Button;
