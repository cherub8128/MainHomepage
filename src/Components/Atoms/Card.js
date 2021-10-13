import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`

    aspect-ratio: 1/1;
    height: ${props => `${props.xh*25}vh`||"25vh"};
    padding: 1vh;
    margin: 2vh;
    border-radius: 1vh;
    background-color: #fff;
    box-shadow: 5px 5px 10px -5px rgb(13,13,13,0.1);
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;


export const Card = ( props ) => {
    const { children, xh } = props;
    return (
        <StyledCard xh={xh}>
            { children }
        </StyledCard>
    );
}
