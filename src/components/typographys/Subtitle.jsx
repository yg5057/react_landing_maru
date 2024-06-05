import React from 'react';
import styled from 'styled-components';


const StyledText = styled.p.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900, #141C24);
    font-family: var(--font-family-primary);
    font-size: 20px;
    font-style: normal;
    line-height: 28px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const Subtitle = ({ children, color, fontWeight }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight}>
            {children}
        </StyledText>
    );
};

export default Subtitle;
