import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    /* width: ${props => `${props.xw*25 ||25}vh`};
    height: ${props => `${props.xh*25 || 25}vh`}; */
    aspect-ratio: 1/1;
    padding: 2px;
    margin: 5px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 5px 5px 5px -5px rgb(13,13,13,0.1);
    color: #0D0D0D;
    font-size: 14px;
    overflow: scroll;
    word-break: break-all;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledCardTitle = styled.h1`
    padding: 0px;
    margin: 0px 0px 0px 5px;
    border-bottom: 1px solid #91CDF221;
    font-size: 1.5em;
`;

export const CardTitle = ( props ) => {
    const { children } = props;
    return (
        <StyledCardTitle>
            { children }
        </StyledCardTitle>
    );
}

export const Card = ( props ) => {
    const { children, className } = props;
    return (
        <StyledCard className={className}>
            { children }
        </StyledCard>
    );
}
