// src/App.jsx
import React, { useState } from 'react';
// import DialogWindow from './components/Dialog/DialogWindow';
import DialogWindow from './Components/Dialog/DialogWindow';
import { FaInfoCircle } from 'react-icons/fa';
import contentImg from './img/content-img5.jpg';
import dialogImg from './img/content-img1.jpg'
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const headerButtons = [
    { label: 'Homepage', onClick: () => setIsOpen(false) },
    { label: 'Contact', onClick: () => setIsOpen(false) },
    { label: 'Open', onClick: () => setIsOpen(false) }
  ];

  const footerButtons = [
    { label: 'Accept', onClick: () => alert('Accepted') },
    { label: 'Cancel', onClick: () => setIsOpen(false) }
  ];

  return (
    <>
    <div className="app vin-header">
      <h1>IceWrap Frontend Task </h1>
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
        content={
          <img src={dialogImg} alt='content' style={{width: "100%", height:"100%"}}></img>
        // <p>This is the dialog content. Add your message here.</p>
      }
        footerData={{
          buttons: footerButtons,
          // info: 'This is optional info text.',
          list: ['Home', 'Contact', 'Testimonials', 'Product']
        }}
      />
      
    </div>
    <div className='back-img'><img src={contentImg} style={{width:"100%"}}></img></div>
    </>
  );
}

export default App;
