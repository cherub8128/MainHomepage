import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ImProfile, ImPacman, ImPencil, ImGithub, ImInstagram, ImBlog, ImMail } from 'react-icons/im'


function Navigation() {
    return (
        <div className="navbar">
            <div className="nav">
                <NavLink className="navitem" activeClassName="nav-active" exact={true} to="/"><FaHome /><span className="navtext">홈</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/profile"><ImProfile /><span id="profile" className="navtext">프로필</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/makes"><ImPacman /><span className="navtext">작품</span></NavLink>
                <NavLink className="navitem" activeClassName="nav-active" to="/articles"><ImPencil /><span className="navtext">연구</span></NavLink>
            </div>
            <div className="nav">
                <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://github.com/cherub8128/"}} target="_blank"><ImGithub /></NavLink>
                <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://www.instagram.com/cherub8128/"}} target="_blank"><ImBlog /></NavLink>
                <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"https://fusionit.tistory.com/"}} target="_blank"><ImInstagram /></NavLink>
                <NavLink className="navicon" activeClassName="nav-active" to={{  pathname:"keywordsky@gmail.com"}} target="_blank"><ImMail /></NavLink>
            </div>
        </div>
    );
}

export default Navigation;