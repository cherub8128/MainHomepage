import React from 'react';
import styled from 'styled-components';
import { SildeLeftButton, SildeRightButton } from '..';

const Container = styled.div`
    position: relative;
    z-index: 0;
    aspect-ratio: 16 / 9;
    width: 90%;
    margin: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 5px 10px -5px rgb(13,13,13,0.1);
    overflow: hidden;
`;

const Item = styled.div`
    margin: 5px;
`;

export const SlideBox = (props) => {
    const { children } = props;
    return (
        <Container>
            <SildeLeftButton />
            <SildeRightButton />
            <Item>{ children }</Item>
        </Container>
    )
}
