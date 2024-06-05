import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardLarge from '../components/cards/CardLarge';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH5 from '../components/typographys/TypoH5';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphM from '../components/typographys/ParagraphM';
import iPhone_right_large from '../assets/iPhone_right_large.png';
import tablet_iPhone15_right from '../assets/tablet_iPhone15_right.png';
import mobile_iPhone15_right from '../assets/mobile_iPhone15_right.png';



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
    gap: 5rem;
    align-items: left;
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
    align-items: left;
    gap: 2rem;
  }
  @media (max-width: 768px) {  // mobile
    align-items: left;
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

const Section03 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper ref={sectionRef} tablet={isTablet} mobile={isMobile}>
      <CardLarge>
        <CardContsWrapper >
          <CardTextWrapper>
            {isMobile ? (
              <CardContsText>
                <ParagraphM color='var(--White)' fontWeight='500'>AI 비서
                  <span style={{ color: 'var(--Mandarin-Orange-600)' }}> 마루</span>가
                </ParagraphM>
                <ParagraphM color='var(--White)' fontWeight='500'>24시간 언제든지 여러분의</ParagraphM>
                <ParagraphM color='var(--White)' fontWeight='500'>인테리어 고민을 해결 해드립니다.</ParagraphM>
              </CardContsText>
            ) : (
              <CardContsText>
                <TypoH5 color='var(--White)' fontWeight='500'>AI 비서
                  <span style={{ color: 'var(--Mandarin-Orange-600)' }}> 마루</span>가
                </TypoH5>
                <TypoH5 color='var(--White)' fontWeight='500'>24시간 언제든지 여러분의</TypoH5>
                <TypoH5 color='var(--White)' fontWeight='500'>인테리어 고민을 해결 해드립니다.</TypoH5>
              </CardContsText>
            )}
            {isMobile ? (
              <CardContsTitle>
                <TypoH6 color='var(--Mandarin-Orange-600)' fontWeight='700'>지금 바로 질문해보세요!</TypoH6>
              </CardContsTitle>
            ) : (
              <CardContsTitle>
                <TypoH3 color='var(--Mandarin-Orange-600)' fontWeight='600'>지금 바로 질문해보세요!</TypoH3>
              </CardContsTitle>
            )}
          </CardTextWrapper>
          <StyledImg isTablet={isTablet} isMobile={isMobile}>
            <img src={isTablet ? tablet_iPhone15_right : (isMobile ? mobile_iPhone15_right : iPhone_right_large)} />
          </StyledImg>
        </CardContsWrapper>
      </CardLarge>
    </SectionWrapper>
  );
};

export default Section03;
