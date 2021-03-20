import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calcResult }) => (
  <div>
    Result:
    {calcResult}
  </div>
);

Display.propTypes = {
  calcResult: PropTypes.string,
};

Display.defaultProps = {
  calcResult: '0',
};

export default Display;
