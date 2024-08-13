// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import DronesPage from './pages/DronesPage';
import MembersPage from './pages/MembersPage';
import DonatePage from './pages/DonatePage';
import SponsorsPage from './pages/SponsorsPage';
import ApplyPage from './pages/ApplyPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/teams" element={<TeamsPage />} />
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
