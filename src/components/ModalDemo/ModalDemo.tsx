import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './ModalDemo.css';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>Open modal</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="demo-modal"
        overlayClassName="demo-overlay"
        closeTimeoutMS={1000}
      >
        <div>My modal dialog</div>
        <button onClick={toggleModal}>Close modal</button>
      </ReactModal>
    </div>
  );
}
