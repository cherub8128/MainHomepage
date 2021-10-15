import React from 'react'
import styled from 'styled-components'

const Left = styled.div`
    position: absolute;
    z-index: 10;
    width: 80px;
    height: 100%;
    opacity: 0.1;
    left: 0;
    &:hover { background-color: #590A0A; }
    &:active { 
        background-color: #590A0A; 
        opacity: 0.3;
    }
`;

const Right = styled.div`
    position: absolute;
    z-index: 10;
    width: 80px;
    height: 100%;
    opacity: 0.1;
    right: 0;
    &:hover { background-color: #023859; }
    &:active { 
        background-color: #023859;
        opacity: 0.3;
    }
`;

export const SildeLeftButton = () => {
    return <Left />;
}
export const SildeRightButton = () => {
    return <Right />;
}
