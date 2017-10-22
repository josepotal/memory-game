import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header className="header">
    <div className="header-title"> Memory Game </div>
  </header>
);

// Header.propTypes = {
//   resetGame: PropTypes.func.isRequired,
//   attempts: PropTypes.number.isRequired
// };
export default Header;
