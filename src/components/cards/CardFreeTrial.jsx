import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
  width: 65vw; 
  height: fit-content; 
  max-width: 120rem;
  max-height: 75.1rem;
  padding: 8rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.4rem;
  border-radius: 50px;
  background-color: var(--TrialBlack);
  color: var(--Mandarin-Orange-600, #F04F0F);
  text-align: center;
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  @media (max-width: 1024px) { // tablet 
    max-width: 70rem;
    max-height: 60rem;
    gap: 6rem;
  }
  @media (max-width: 768px) {  // mobile
    max-width: 35rem;
    max-height: 45rem;
    gap: 3.4rem;
  }
`;

const CardFreeTrial = ({ children }) => {
    return (
      <StyledCard>
        {children}
      </StyledCard>
    );
  };

export default CardFreeTrial;
