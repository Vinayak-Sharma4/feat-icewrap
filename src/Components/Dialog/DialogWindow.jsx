// src/components/Dialog/DialogWindow.jsx
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './Dialog.css';

const DialogWindow = ({ isOpen, headerData, content, footerData }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-window">
        <Header {...headerData} />
        <Content>{content}</Content>
        <Footer {...footerData} />
      </div>
    </div>
  );
};

export default DialogWindow;
