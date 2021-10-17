import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
export const Wrapper = styled.div`
    margin-left: ${props => props.margin? props.margin:"0px"};
    margin-right: ${props => props.margin? props.margin:"0px"};
    margin-bottom: 50px;
    padding-bottom: 100px;
    animation: ${fadeIn} 1s;
    --moz-animation: ${fadeIn} 1s; /* Firefox */
    --webkit-animation: ${fadeIn} 1s; /* Safari and Chrome */
    --o-animation: ${fadeIn} 1s; /* Opera */
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 0px 0px 15px;
    padding: 0px;
`;