// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import DronesPage from './components/DronesPage';
import MembersPage from './components/MembersPage';
import DonatePage from './components/DonatePage';
import SponsorsPage from './components/SponsorsPage';
import ApplyPage from './components/ApplyPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/teams" element={<MembersPage />} />
        <Route path="/drones" element={<DronesPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
