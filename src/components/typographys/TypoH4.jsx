import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h4.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900);
    font-family: var(--font-family-primary);
    font-size: 36px;
    font-style: normal;
    line-height: 44px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const TypoH4 = ({ children, color, fontWeight }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight}>
            {children}
        </StyledText>
    );
};

export default TypoH4;