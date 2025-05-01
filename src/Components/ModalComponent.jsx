import React, {useState} from "react"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ModalComponent({ isOpen, onClose, tel }) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Appelez-moi au :</h2>
      <h3>{tel}</h3>
    </Modal>
  );
}

export default ModalComponent;
