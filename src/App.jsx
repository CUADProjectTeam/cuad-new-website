// src/App.jsx
// import React, { useState } from 'react';
// import Header from './components/Header';
// import AboutPage from './components/AboutPage';
// import ApplyPage from './components/ApplyPage';
// import DonatePage from './components/DonatePage';
// import MembersPage from './components/MembersPage';
// import SponsorsPage from './components/SponsorsPage';
import Drone from './components/Drone'
// Import other pages as needed

const App = () => {
  // const [page, setPage] = useState('about');

  // const renderPage = () => {
  //   switch (page) {
  //     case 'about':
  //       return <AboutPage />;
  //     case 'apply':
  //       return <ApplyPage />;
  //     case 'donate':
  //       return <DonatePage />;
  //     case 'members':
  //       return <MembersPage />;
  //     case 'sponsors':
  //       return <SponsorsPage />;
  //     // Add other cases as needed
  //     default:
  //       return <AboutPage />;
  //   }
  // };
  const stats = [
    { value: '30', label: 'STATISTIC' },
    { value: '1.24', label: 'STATISTIC' },
    { value: '02', label: 'STATISTIC' }
  ];
  return (
    <div>
      <Drone 
      title="GREASY"
      description="WNWNWNKWNDKND,WKFKWNKF OLDQMD LQDMLQMDMD LMDQLM LMDQMDLM QDMLQMDLM MDQLMD D; QSML ;QS, [SQ [Q ,LMQLMD LMD D LQDL LDML,SQ, LLM LQD DLQDLMDL L,DLQMD LMLDLMDQMD LM Q KW LQM LQM S QSLL Q,LLMDQ DMLMDLDQM QLMDLMDLM LQMDLM LQMDLD LLQM;M QL;L WLM"
      stats={stats}
    />
    </div>
  );
};

export default App;
