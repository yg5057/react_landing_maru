import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardLarge from '../components/cards/CardLarge';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH5 from '../components/typographys/TypoH5';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphM from '../components/typographys/ParagraphM';
import iPhone_left_large from '../assets/iPhone_left_large.png';
import tablet_iPhone15_left from '../assets/tablet_iPhone15_left.png';
import mobile_iPhone15_left from '../assets/mobile_iPhone15_left.png';


const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const SectionWrapper = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--Neutral-Gray-800);
`;
const CardContsWrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  @media (max-width: 1024px) { // tablet 이하
    flex-direction: column; 
    gap: 5rem;
  }
`;
const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 7rem;

  @media (max-width: 1024px) { // tablet 이하
    flex-direction: column; 
    gap: 4rem;
    align-items: center;
  }
  @media (max-width: 768px) {  // mobile
    gap: 3rem;
  }
`
const CardContsTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: .6rem;
`;
const CardContsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 2.3rem;

  @media (max-width: 1024px) { // tablet 
    align-items: center;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {  // mobile
    align-items: center;
    gap: 1.2rem;
  }
`;
const StyledImg = styled.div`
  width: 33%;
  max-width: 30rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 1024px) { // tablet 이하
    width: 100%;
    max-width: ${({ isTablet }) => (isTablet ? '40rem' : '30rem')};
  }
  @media (max-width: 768px) {  // mobile 이하
    width: 100%;
    max-width: ${({ isMobile }) => (isMobile ? '35rem' : '30rem')};
  }
`;


const Section02 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <CardLarge >
        <CardContsWrapper ref={sectionRef} >
          <CardTextWrapper>
          {isMobile ? (
            <CardContsTitle>
              <TypoH6 color='var(--Mandarin-Orange-600)' fontWeight='700'>인테리어</TypoH6>
              <TypoH6 color='var(--Mandarin-Orange-600)' fontWeight='700'>이렇게 즐거울 수 있나요?</TypoH6>
            </CardContsTitle>
             ) : (
              <CardContsTitle>
              <TypoH3 color='var(--Mandarin-Orange-600)' fontWeight='600'>인테리어</TypoH3>
              <TypoH3 color='var(--Mandarin-Orange-600)' fontWeight='600'>이렇게 즐거울 수 있나요?</TypoH3>
            </CardContsTitle>
              )}
                     {isMobile ? (
            <CardContsText>
              <ParagraphM color='var(--White)' fontWeight='500'>어려운 용어, 시공 가격, 시공 순서 등등</ParagraphM>
              <ParagraphM color='var(--White)' fontWeight='500'>인테리어에 대해 모르는게 없는</ParagraphM>
              <ParagraphM color='var(--White)' fontWeight='500'>
                <span style={{ color: 'var(--Mandarin-Orange-600)' }}>AI 비서 마루</span> 에게 물어보세요!
              </ParagraphM>
            </CardContsText>
             ) : (
              <CardContsText>
              <TypoH5 color='var(--White)' fontWeight='500'>어려운 용어, 시공 가격, 시공 순서 등등</TypoH5>
              <TypoH5 color='var(--White)' fontWeight='500'>인테리어에 대해 모르는게 없는</TypoH5>
              <TypoH5 color='var(--White)' fontWeight='500'>
                <span style={{ color: 'var(--Mandarin-Orange-600)' }}>AI 비서 마루</span> 에게 물어보세요!
              </TypoH5>
            </CardContsText>
              )}
          </CardTextWrapper>
          <StyledImg isTablet={isTablet} isMobile={isMobile}>
            <img src={isTablet ? tablet_iPhone15_left : (isMobile ? mobile_iPhone15_left : iPhone_left_large)} />
          </StyledImg>
        </CardContsWrapper>
      </CardLarge>
    </SectionWrapper>
  );
};

export default Section02;
