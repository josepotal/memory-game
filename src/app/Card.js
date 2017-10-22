import React from 'react';
import PropTypes from 'prop-types';
import bg from '../assets/bg.jpg';

const Card = props => (
  <div
    className="card"
    onClick={props.cardSelection}
  >
    {props.isBeingCompared || props.found ?
      <div className="card-front">
        <img width="100%" height="100%" src={props.card.id} alt="card" />
      </div> :
      <div className="card-back">
        <img width="100%" height="100%" src={bg} alt="card" />
      </div>}
  </div>
);

Card.propTypes = {
  cardSelection: PropTypes.func.isRequired,
  isBeingCompared: PropTypes.bool.isRequired,
  found: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
