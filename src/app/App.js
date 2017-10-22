import React, { Component } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Board from './Board';
import Footer from './Footer';

import initBoard from '../utils/initializeGame';

const getInitialState = () => {
  const board = initBoard;
  return {
    board,
    pairSelected: [],
    checking: false,
    attempts: 0
  };
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  cardSelection(card) {
    if (
      this.state.checking ||
      this.state.pairSelected.indexOf(card) > -1 ||
      card.found
    ) {
      return;
    }

    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected
    });

    if (pairSelected.length === 2) {
      this.comparePair(pairSelected);
    }
  }

  comparePair(pairSelected) {
    this.setState({
      checking: true
    });
    setTimeout(() => {
      const [first, second] = pairSelected;
      let { board } = this.state;
      if (first.id === second.id) {
        board = board.map((card) => {
          if (card.id !== first.id) {
            return card;
          }
          return { ...card, found: true };
        });
      }
      this.endGame(board);
      this.setState({
        pairSelected: [],
        board,
        checking: false,
        attempts: this.state.attempts + 1
      });
    }, 1000);
  }

  endGame(board) {
    if (board.filter(card => !card.found).length === 0) {
      alert(`You made it in ${this.state.attempts} attempts`);
    }
  }

  resetGame() {
    this.setState(getInitialState());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader
          attempts={this.state.attempts}
          resetGame={() => this.resetGame()}
        />
        <Board
          board={this.state.board}
          pairSelected={this.state.pairSelected}
          cardSelection={card => this.cardSelection(card)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
