import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next }) => (
  <div className="display">
    <span>{(next && next.toString()) || (total && total.toString()) || '0'}</span>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
};

export default Display;
