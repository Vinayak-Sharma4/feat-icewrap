// src/components/Dialog/Header.jsx
import React from 'react';
import { IconAndText } from './IconAndText';
import ButtonGroup from './ButtonGroup';

const Header = ({ icon, title, buttons = [] }) => {
  return (
    <div className="dialog-header">
      <IconAndText icon={icon} text={title} />
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Header;
