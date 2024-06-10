import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MainLayout from './layout/Main';
import LandingMain from './pages/LandingMain'

function App() {
  const navigate = useNavigate();

  useEffect(() => { navigate('/survey'); }, [navigate]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/survey" element={<LandingMain />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
