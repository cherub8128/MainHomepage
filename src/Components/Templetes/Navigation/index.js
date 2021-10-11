import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NavLogo } from './img/nav_logo.svg';
import { FaHome } from 'react-icons/fa';
import { ImProfile, ImPacman, ImPencil, ImGithub, ImInstagram, ImBlog, ImMail } from 'react-icons/im'


function Navigation() {
    return (
        <div className="navbar">
            <div className="nav">
                <NavLogo className="logo" />
                <ul>
                    <li><NavLink className="navitem" activeClassName="nav-active" exact={true} to="/"><FaHome />홈</NavLink></li>
                    <li><NavLink className="navitem" activeClassName="nav-active" to="/profile"><ImProfile />프로필</NavLink></li>
                    <li><NavLink className="navitem" activeClassName="nav-active" to="/makes"><ImPacman />작품</NavLink></li>
                    <li><NavLink className="navitem" activeClassName="nav-active" to="/articles"><ImPencil />연구</NavLink></li>
                </ul>
                <div className="extra">
                    <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://github.com/cherub8128/"}} target="_blank"><ImGithub /></NavLink>
                    <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://www.instagram.com/cherub8128/"}} target="_blank"><ImBlog /></NavLink>
                    <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://fusionit.tistory.com/"}} target="_blank"><ImInstagram /></NavLink>
                    <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"keywordsky@gmail.com"}} target="_blank"><ImMail /></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;