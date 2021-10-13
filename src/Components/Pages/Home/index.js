import React from 'react';
import './index.css';
import { Card } from '../../'

function Home() {
    return (
        <div className="container">
            <h1>더하고 홈페이지</h1>
            <Card xh="1" >테스트</Card>
            <Card xh="2" />
            <Card xh="1" />
        </div>
        
    )
}

export default Home
