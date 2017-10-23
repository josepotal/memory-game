import React, { Component } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Board from './Board';
import Footer from './Footer';
import MessageModal from './MessageModal';

import {getInitialState} from '../utils/helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.resetGame = this.resetGame.bind(this);
    this.cardSelection = this.cardSelection.bind(this);
  }

  componentDidMount() {
    this.stopTime();
    this.startTime();
  }

  cardSelection(card) {
    if (card.found || this.state.checking ||
      this.state.pairSelected.indexOf(card) !== -1) {
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

      this.setState({
        pairSelected: [],
        board,
        checking: false,
        attempts: this.state.attempts + 1
      });

      this.endGame(board);
    }, 1000);
  }

  endGame(board) {
    if (board.filter(card => !card.found).length === 0) {
      this.setState({
        modal: true
      });
      this.stopTime();
      if (!localStorage.bestMark) {
        localStorage.setItem('bestMark', this.state.attempts)
      }
      if (!localStorage.bestTime) {

        localStorage.setItem('bestTime', this.state.seconds)
      }
      if (localStorage.bestMark && localStorage.bestMark > this.state.attempts) {
        localStorage.setItem('bestMark', this.state.attempts)
      }
      if (localStorage.bestTime && localStorage.bestTime > this.state.seconds) {
        localStorage.setItem('bestTime', this.state.seconds)
      }
    }

  }

  resetGame() {
    this.setState(getInitialState());
    this.stopTime();
    this.startTime();
  }

  //chronometer functions
  startTime = () => {
      this.counter = setInterval(() => {
      this.setState({
        seconds: (this.state.seconds + 1)
      });
    }, 1000)
  }

  stopTime= () => {
    clearInterval(this.counter)
  }

  render() {
    const {attempts, board, pairSelected, modal, seconds} = this.state;
    return (
      <div className="App">
        <Header />
        <SubHeader
          attempts={attempts}
          resetGame={this.resetGame}
          seconds={seconds}
        />
        <MessageModal
          open={modal}
          attempts={attempts}
          closeModal={this.resetGame}
        />
        <Board
          board={board}
          pairSelected={pairSelected}
          cardSelection={this.cardSelection}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
