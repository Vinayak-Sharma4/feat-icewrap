// src/components/Dialog/Footer.jsx
import React from 'react';
import ButtonGroup from './ButtonGroup';

const Footer = ({ buttons = [], info }) => {
  return (
    <div className="dialog-footer">
      <div className="info-text">{info}</div>
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Footer;
