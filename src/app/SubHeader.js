import React from 'react';
import PropTypes from 'prop-types';

const SubHeader = props => (
  <header className="subheader">
    <div className="subheader-attempts"> Attempts: </div>
    <div className="subheader-restart">
      <button>RESTART</button>
    </div>
  </header>
);

// Header.propTypes = {
//   resetGame: PropTypes.func.isRequired,
//   attempts: PropTypes.number.isRequired
// };
export default SubHeader;
