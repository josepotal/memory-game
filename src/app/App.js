import React, { Component } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Board from './Board';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
