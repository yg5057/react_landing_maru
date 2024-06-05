import React from 'react';
import styled from 'styled-components';

const MainContent = styled.main`
  width: 100vw;
  height: 100%;
  overflow-y: auto;
`;

const MainLayout = ({ children }) => {
  return (
    <section>
      <MainContent>{children}</MainContent>
    </section>
  );
};

export default MainLayout;
