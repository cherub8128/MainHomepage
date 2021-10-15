import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 45vw);
    grid-template-rows: repeat(auto-fill, 45vw);
    grid-auto-flow: dense;
    gap: 2vw;
    @media screen and (min-width: 50em) {
        grid-template-columns: repeat(auto-fill, 30vw);
        grid-template-rows: repeat(auto-fill, 30vw);
    }
`
const Item = styled.div`
    grid-column: ${props => props.scol&&props.ecol? `${props.scol} / ${props.ecol}`:"auto"};
    grid-row: ${props =>  props.srow&&props.erow? `${props.srow} / ${props.erow}`:"auto"};
`;

export const NnGrid = ( props ) => {
    const { children } = props;
    return (
        <Container>
            { children }
        </Container>
    );
}
export const NnGridItem = ( props ) => {
    const { children, scol, srow, ecol, erow } = props;
    return (
        <Item scol={scol} srow={srow} ecol={ecol} erow={erow}>
            { children }
        </Item>
    );
}