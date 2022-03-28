import React from 'react';
import {Title, Wrapper, NnGrid, Card, CardTitle} from '../Components'
import { GoCheck } from 'react-icons/go';
import styled from 'styled-components';

const UList = styled.ul`
    list-style: none;
    padding: 2em;
`

function Makes() {
    return (
        <Wrapper margin="10px">
            <Title>작품</Title>
            <NnGrid>
                <Card>
                    <CardTitle>손게임</CardTitle>
                    <UList>
                        <li><GoCheck/>첫 유니티 제작 게임</li>
                        <li><GoCheck/>이벤트를 이용한 멀티터치 구현에 신경썼다 생각했지만 뒤돌아보면 많이 부족한 결과물</li>
                    </UList>
                </Card>
                <Card>
                    <CardTitle>커스텀 가챠 시뮬레이터</CardTitle>
                    <UList>
                        <li><GoCheck/><a href="https://gacha.thehago.site/" target="_blank" rel="noreferrer">https://gacha.thehago.site/</a></li>
                        <li><GoCheck/>첫 리액트 홈페이지</li>
                        <li><GoCheck/>가챠 확률을 사용자가 직접 설정하여 실제로 뽑아볼 수 있도록 함</li>
                        <li><GoCheck/>리액트의 훅을 처음으로 활용함. 커스텀 훅으로 변경할 예정.</li>
                        <li><GoCheck/>버전: 0.12</li>
                    </UList>
                </Card>
                <Card>
                    <CardTitle>Thinkloud</CardTitle>
                    <li><GoCheck/>현재 제작 중인 몬스터 게임</li>
                </Card>
            </NnGrid>
        </Wrapper>
    )
}

export default Makes
