import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import MainLayout from './layout/Main';
import LandingMain from './pages/LandingMain'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-4JM33X75PS', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/survey" />} />
        <Route path="/survey" element={<LandingMain />} />
      </Routes>
    </MainLayout>
  );
}

export default App;