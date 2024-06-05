import React from 'react';
import styled from 'styled-components';

import TypoH6 from '../typographys/TypoH6';


const StyledButton = styled.button.attrs(props => ({
    style: {
        background: props.background || 'auto',
        color: props.color || 'auto',
    },
}))`
    display: flex;
    width: 28rem;
    padding: 1.2rem 2.4rem;
    justify-content: center;
    align-items: center;
    background: var(--Gradient-Mandarin-Orange-Gradient);
    color: var(--White);
    border-radius: 50px;
    cursor: pointer;
    &:active {
        transform: translateY(3px);  cursor: pointer;
    }
`;

const BtnUrl = ({ children, onClick, backgroundColor, color}) => {
    return (
        <StyledButton onClick={onClick} backgroundColor={backgroundColor} color={color}>
            <TypoH6 color='var(--White)'> {children} </TypoH6>
        </StyledButton>
    );
};

export default BtnUrl;
