// src/App.jsx
import React, { useState } from 'react';
// import DialogWindow from './components/Dialog/DialogWindow';
import DialogWindow from './Components/Dialog/DialogWindow';
import { FaInfoCircle } from 'react-icons/fa';
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const headerButtons = [
    { label: 'Close', onClick: () => setIsOpen(false) }
  ];

  const footerButtons = [
    { label: 'Accept', onClick: () => alert('Accepted') },
    { label: 'Cancel', onClick: () => setIsOpen(false) }
  ];

  return (
    <div className="app vin-header">
      <h1>IceWrap Frontend Task done</h1>
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>

      <DialogWindow
        isOpen={isOpen}
        headerData={{
          icon: FaInfoCircle,
          title: 'IceWrap Task',
          buttons: headerButtons
        }}
        content={<p>This is the dialog content. Add your message here.</p>}
        footerData={{
          buttons: footerButtons,
          info: 'This is optional info text.'
        }}
      />
    </div>
  );
}

export default App;
