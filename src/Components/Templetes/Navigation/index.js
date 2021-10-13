import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ImProfile, ImPacman, ImPencil, ImGithub, ImInstagram, ImBlog, ImMail } from 'react-icons/im'


export const Navigation = () => {
    return (
        <div className="navbar">
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
        </div>
    );
}