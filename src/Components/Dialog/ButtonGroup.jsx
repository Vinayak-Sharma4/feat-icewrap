// src/components/Dialog/ButtonGroup.jsx
import React from 'react';
import DialogButton from './DialogButton';

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="button-group">
      {buttons.map((btn, index) => (
        <DialogButton key={index} label={btn.label} onClick={btn.onClick} />
      ))}
    </div>
  );
};

export default ButtonGroup;
