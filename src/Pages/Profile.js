import React from 'react';
import styled from 'styled-components';
import {Title, Wrapper} from '../Components';
import logo from './img/thehago_logo.png'

const LogoImg = styled.img`
    
    margin: 5px;
    height: 20vw;
    border-radius: 50%;
`

//TODO: 내용을 json으로 받아오기
export default function Profile() {
    return (
        <Wrapper>
            <Title>더하고의 프로필</Title>
            <LogoImg src={logo} alt="더하고 로고" />
            <ul>
                <li>연혁
                    <ul>
                        <li>2016.02. 인하대학교 수학교육과 졸업</li>
                        <li>2017.03.~2020.02. 고등학교 수학교사 재직</li>
                        <li>2021.08. 정보처리기사 취득</li>
                        <li>2021.12. 빅데이터기사 취득</li>
                    </ul>
                </li>
                <li>저서
                    <ul>
                        <li>2019,고교학점제를 위한 북적거림의 학교,하움출판사 공동저자</li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}
