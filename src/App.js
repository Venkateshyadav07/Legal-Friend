import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CriminalLaw from './components/CriminalLaw';
import CivilLaw from './components/CivilLaw';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criminal" element={<CriminalLaw />} />
<Route path="/Civil" element={<CivilLaw />} />
<Route path="/About" element={<About />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
