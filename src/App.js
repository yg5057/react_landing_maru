import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/Main';
import LandingMain from './pages/LandingMain'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<LandingMain />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
