import React from 'react';
import './index.css'
import { ReactComponent as NextPage } from './img/next_page.svg';
import { ReactComponent as PrevPage } from './img/prev_page.svg';

const Articles = () => {
    return (
        <div>
            <div className="box">
                <NextPage className="slide-right" />
                <div className="item">Hello this is box. test 테스트중입니다.</div>
                <PrevPage className="slide-left" />
            </div>
        </div>
    );
}

export default Articles;
