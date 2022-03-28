import React from 'react';
import { Title, Wrapper, Carousel } from '../Components'

const Home = () => {
    return (
        <Wrapper>
            <Carousel>
                <div id='1'><h1>공사 중입니다</h1></div>
                <div id='2'>
                    <h1>현재 작업 중</h1>
                    <ol>
                        <li>Thinkloud 게임 제작</li>
                        <li>프로필 홈페이지 제작</li>
                    </ol>
                </div>
            </Carousel>
            <Title>더하고 TheHaGo</Title>
        </Wrapper>
    )
}

export default Home;