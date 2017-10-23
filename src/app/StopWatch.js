import React, {Component} from 'react';

export default class StopWatch extends Component {
  getSeconds() {
    return('0' + this.props.seconds % 60).slice(-2);
  }
  getMinutes() {
    return Math.floor(this.props.seconds / 60);
  }

  render() {
    return (
      <div className="subheader-stopwatch">
        {this.getMinutes()}:{this.getSeconds()}
      </div>
    )
  }
}
