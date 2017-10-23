import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StopWatch from './StopWatch'

export default class SubHeader extends Component {

  getSeconds() {
    if (localStorage.bestTime){
      return('0' + localStorage.bestTime % 60).slice(-2);
    }
  }

  getMinutes() {
    if (localStorage.bestTime){
      return Math.floor(localStorage.bestTime / 60);
    }
  }

  render() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    let bestTime = `${minutes}:${seconds}`
    if (!localStorage.bestTime){
      bestTime = '-'
    }
    return (
      <header className="subheader">
        <div className="subheader-attempts">
          <p>Best Mark: {localStorage.bestMark || '-'}</p>
          <p>Best Time: {bestTime || '-'}</p>
        </div>
        <div className="subheader-attempts"> Attempts: {this.props.attempts} </div>
        <StopWatch
          seconds={this.props.seconds}
        />
        <div className="subheader-restart">
          <button onClick={this.props.resetGame}>RESTART</button>
        </div>
      </header>
    )
  }
};

SubHeader.propTypes = {
  resetGame: PropTypes.func.isRequired,
  attempts: PropTypes.number.isRequired
};
