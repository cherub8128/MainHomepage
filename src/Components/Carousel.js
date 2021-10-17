import React from 'react';
import styled from 'styled-components';

const CarouselBase = styled.div`
    display: flex;
    flex: none;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    height:100%;
    background-color: #fff;
    
    div {
        scroll-snap-align: start;
        flex: none;
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 3em;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;
`;
const CarouselButtonSet = styled.div`
    position:absolute;
    bottom: 5px;
    left: 50%;
    z-index: 10;
    cursor: pointer;
    transition: opacity 0.2s;
    a {
        display: inline-block;
        width: 0.85em;
        height: 0.85em;
        border-radius: 50%;
        background-color: #0D0D0D;
        opacity: 0.3;
        &:not(:first-child) { margin-left: 5px; }
        &:hover{ opacity: 0.5; }
        &:focus{ opacity: 0.8; }
    }
    span {
        display: none;
    }
`;

const CarouselButton = ( props ) => {
    const { id } = props
    const _id = `#${id}`
    return (
        <a href={_id}><span>carousel button</span></a>
    )
}

export const Carousel = ( props ) => {
    const { children } = props
    const ButtonSet = children.map( (child, i) => (<CarouselButton key={i} id={child.props.id} />) );
    return (
        <Container>
            <CarouselBase>
                { children }
            </CarouselBase>
            <CarouselButtonSet>{ ButtonSet }</CarouselButtonSet>
        </Container>
    )
}
