import React from 'react';
import PropTypes from 'prop-types';

const SubHeader = props => (
  <header className="subheader">
    <div className="subheader-attempts"> Best Mark: {localStorage.bestMark || 'No records yet'} </div>
    <div className="subheader-attempts"> Attempts: {props.attempts} </div>
    <div className="subheader-restart">
      <button onClick={props.resetGame}>RESTART</button>
    </div>
  </header>
);

SubHeader.propTypes = {
  resetGame: PropTypes.func.isRequired,
  attempts: PropTypes.number.isRequired
};
export default SubHeader;
