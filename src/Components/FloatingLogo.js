import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from './img/nav_logo.svg';

const Logo = styled.div`
    position: fixed;
    z-index: 100;
    right: 10px;
    top: 10px;
    color: #023859;
    opacity: 0.3;
    height: 20px;
    width: 20px;
`;

export const FloatingLogo = () => { 
    return ( 
        <Logo>
            <LogoSVG />
        </Logo> 
    );
}
