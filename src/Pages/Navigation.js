import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ImProfile, ImPacman, ImPencil, ImGithub, ImInstagram, ImBlog, ImMail } from 'react-icons/im'
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    background-color: #011826;
    height:50px;
    width:100%;
    a {
        color: #F2F2F2;
        text-decoration: none;
    }
    a:hover { color: #91CDF2; }
    a:active { color: #3B8DBF; }
    .nav { margin: 0px 15px 3px; }
    .navicon { margin: 0px 0px 0px 10px; }
    .navitem  { margin: 0px 20px 0px 0px; }
    .nav-active { border-bottom: 3px solid #F2F2F2; }
    @media screen and (max-width: 430px) {
        .nav { margin: 0px 10px 0px;}
        .navicon { margin: 0px 0px 0px 5px; }
        .navitem { margin: 0px 10px 0px 0px; }
    }
    @media screen and (max-width: 345px) {
        .navicon { margin: 0px 0px 0px 2px; }
        .navitem { margin: 0px 5px 0px 0px; }
        .navtext { font-size: 11px; }
    }
    @media screen and (max-width: 280px) {
        .navicon { margin: 0px 0px 0px 2px; }
        .navitem { margin: 0px 5px 0px 0px; }
        .navtext { display: none; }
    }
`;

export default function Navigation () {
    return (
        <Nav>
            <div className="nav">
                <NavLink className="navitem" activeClassName="nav-active" exact={true} to="/"><FaHome /><span className="navtext">홈</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/profile"><ImProfile /><span id="profile" className="navtext">프로필</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/makes"><ImPacman /><span className="navtext">작품</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/articles"><ImPencil /><span className="navtext">연구</span></NavLink>
            </div>
            <div className="nav">
                <NavLink className="navicon" to={{ pathname:"https://github.com/cherub8128/" }} target="_blank"><ImGithub /></NavLink>
                <NavLink className="navicon" to={{ pathname:"https://www.instagram.com/cherub8128/" }} target="_blank"><ImBlog /></NavLink>
                <NavLink className="navicon" to={{ pathname:"https://fusionit.tistory.com/" }} target="_blank"><ImInstagram /></NavLink>
                <a className="navicon" href="mailto:keywordsky@gmail.com"><ImMail /></a>
            </div>
        </Nav>
    );
}