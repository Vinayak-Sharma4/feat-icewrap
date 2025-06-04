// src/components/Dialog/DialogButton.jsx
import React from 'react';

const DialogButton = ({ label, onClick }) => {
  return (
    <button className="dialog-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default DialogButton;
