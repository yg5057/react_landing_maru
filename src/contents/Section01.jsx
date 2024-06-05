import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';

import TypoH1 from '../components/typographys/TypoH1';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH5 from '../components/typographys/TypoH5';
import ParagraphL from '../components/typographys/ParagraphL';
import BtnUrl from '../components/buttons/BtnUrl';
import Scroll from '../components/scroll/Scroll';


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
  gap: ${({ mobile }) => (mobile ? '6rem' : '10rem')};
`;
const Span = styled.span`
    color: var(--Mandarin-Orange-600, #F04F0F);
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    animation: ${slideUpAnimation} 1s ease forwards;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    animation: ${slideUpAnimation} 1.2s ease forwards;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideUpAnimation} 1.4s ease forwards;
`
const ScrollWrapper = styled.div`
    display: flex;
    animation: ${slideUpAnimation} 1.6s ease forwards;
`;

const Section01 = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const openURl = () => { window.open('https://www.google.com', '_blank'); };

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      {isMobile ? (
        <Title>
          <TypoH4 fontWeight='700'>인테리어 정보 일일이</TypoH4> 
          <TypoH4 fontWeight='700'>검색하기 힘드셨죠?</TypoH4> 
        </Title>
      ) : (
        <Title>
          <TypoH1 fontWeight='700'>인테리어 정보 일일이</TypoH1>
          <TypoH1 fontWeight='700'>검색하기 힘드셨죠?</TypoH1>
        </Title>
      )}
      {isMobile ? (
        <Text>
          <ParagraphL fontWeight='500' textAlign='center'>인테리어 전용 AI 비서 <Span>"마루"</Span> 가 도와드릴게요!</ParagraphL> {/* TypoH5 대신 ParagraphL 사용 */}
          <ParagraphL fontWeight='500' textAlign='center'>혼자 고민하지 마시고, <Span>"마루"</Span>와 함께 즐겁게 <br/>인테리어 하세요!</ParagraphL> {/* TypoH5 대신 ParagraphL 사용 */}
        </Text>
      ) : (
        <Text>
          <TypoH5 fontWeight='500'>인테리어 전용 AI 비서 <Span>"마루"</Span> 가 도와드릴게요!</TypoH5>
          <TypoH5 fontWeight='500'>혼자 고민하지 마시고, <Span>"마루"</Span>와 함께 즐겁게 인테리어 하세요!</TypoH5>
        </Text>
      )}
      <Btn>
        <BtnUrl onClick={openURl}>시작하기</BtnUrl>
      </Btn>
      <ScrollWrapper>
        <Scroll>SCROLL</Scroll>
      </ScrollWrapper>
    </SectionWrapper>
  );
};

export default Section01;