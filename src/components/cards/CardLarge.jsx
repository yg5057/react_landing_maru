import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
  width: 65vw; 
  height: fit-content; 
  max-width: 120rem;
  max-height: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  border-radius: 50px;
  box-shadow: var(--DropShadow-OnDark-XXL);
  background-color: var(--Neutral-Gray-900);
  @media (max-width: 1024px) { // tablet 
    max-width: 70rem;
    max-height: 93.6rem;
  }
  @media (max-width: 768px) {  // mobile
    max-width: 35rem;
    max-height: 70rem
  }
`;

const CardLarge = ({ children}) => {
    return (
      <StyledCard>
        {children}
      </StyledCard>
    );
  };

export default CardLarge;
