import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Configuration from './Components/TaskComps/Configuration/Configuration';
import Email from './Components/TaskComps/Email/EmailMask';
import Pacman from './Components/TaskComps/Pacman/Pacman';

function App() {

  const handleEmailMaskButtonClick = (emailMaskLength) => {
    // Implement your logic here
    console.log(`Email Mask Length: ${emailMaskLength}`);
    // You can perform any other action with the emailMaskLength value
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Configuration" element={<Configuration name="Configuration" />} />
          <Route path="/Email" element={<Email name="Email" />} handleEmailMaskButtonClick={handleEmailMaskButtonClick} />
          <Route path="/Pacman" element={<Pacman name="Pacman" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
