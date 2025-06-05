import React from 'react';
import ButtonGroup from './ButtonGroup';

const Footer = ({ buttons = [], info, list = [] }) => {
  return (
    <div className="dialog-footer">
      <div className="footer-left">
        <ul className="footer-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {info && <p className="info-text">{info}</p>}
      </div>
      <div className="footer-right">
        <ButtonGroup buttons={buttons} />
      </div>
    </div>
  );
};

export default Footer;