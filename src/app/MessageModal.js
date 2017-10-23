import React,  {Component} from 'react';

import Modal from 'react-modal'

export default class MessageModal extends Component {

  render () {
    const {open, attempts, closeModal} = this.props;
    return (
      <Modal
        isOpen={open}
        className="modal"
      >
        <h1>Well done!!</h1>
        <h1>You made it in {attempts} attempts</h1>
        <div className="modal-close-button">
          <button onClick={closeModal}>
            Close and Play Again
          </button>
        </div>
      </Modal>
    )
  }
};
