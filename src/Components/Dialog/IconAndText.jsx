// src/components/Dialog/IconAndText.jsx
import React from 'react';

export const IconAndText = ({ icon: Icon, text }) => (
  <div className="icon-text">
    {Icon && <Icon className="icon" />}
    <span>{text}</span>
  </div>
);
