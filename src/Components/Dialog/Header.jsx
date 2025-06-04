// src/components/Dialog/Header.jsx
import React from 'react';
import { IconAndText } from './IconAndText';
import ButtonGroup from './ButtonGroup';
import imageIcon from '../../img/background-img1.png';

const Header = ({ icon, title, buttons = [] }) => {
  return (
    <div className="dialog-header">
      <IconAndText icon={imageIcon} text={title} />
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Header;
