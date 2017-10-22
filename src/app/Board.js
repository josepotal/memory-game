import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import Card from './Card';


export default class Board extends Component {
  render () {
    const board =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
      <div className="board">
        {board.map((card, index) => {
          //const isBeingCompared = props.pairSelected.indexOf(card) > -1;
          return (
            <Card
              key={index}
              card={card}
            />
          );
        })}
      </div>
    )
  }
};

// Board.propTypes = {
//   board: PropTypes.array,
//   pairSelected: PropTypes.array
// };
