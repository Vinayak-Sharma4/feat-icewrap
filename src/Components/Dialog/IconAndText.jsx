// src/components/Dialog/IconAndText.jsx
import React from 'react';

export const IconAndText = ({ icon, text }) => (
  <div className="icon-text">
    {icon && <img style={{width: "52px"}} src={icon} alt="icon" className="icon" />}
    <span style={{padding: "0px 40px"}}>{text}</span>
  </div>
);
