import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, NnGrid, NnGridItem } from '../Components'

const Warpper = styled.div`
    margin: 15px 15px 50px;
    padding-bottom: 100px;
`;

const Title = styled.h1`
    margin: 0px;
    padding: 0px;
`;

const Home = () => {
    return (
        <Warpper>
            <Title>더하고 홈페이지</Title>
            <NnGrid>
                <Card className="item"><CardTitle>제목 테스트</CardTitle>테스트</Card>
                <Card/>
                <NnGridItem scol="1" ecol="3" srow="1" erow="3"><Card>크기조정</Card></NnGridItem>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card>1234567890123456789012345678901234567890</Card>
                <Card>Test2</Card>
                <div>빈칸1</div>
                <div>빈칸2</div>
                <div>빈칸3</div>
                <NnGridItem><div>빈칸4</div></NnGridItem>
            </NnGrid>
            
        </Warpper>
    )
}

export default Home;