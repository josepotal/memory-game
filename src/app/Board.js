import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Board = props => (
  <div className="board">
    {props.board.map((card, index) => {
      const isBeingCompared = props.pairSelected.indexOf(card) > -1;
      return (
        <Card
          key={index}
          card={card}
          isBeingCompared={isBeingCompared}
          cardSelection={() => props.cardSelection(card)}
          found={card.found}
        />
      );
    })
    }
  </div>
);

Board.propTypes = {
  board: PropTypes.array,
  pairSelected: PropTypes.array
};

export default Board;
