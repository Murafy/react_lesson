import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h2> H O M E</h2>
            <p>url 의 path 는 "/"  가장 먼저 보이는 컴포넌트</p>
            <hr/>
            {/* 사용자 페이지 이동 할 수 있는 링크 */}
            <Link to ="/About"> 소개 </Link>
            <Link to ="/board"> 게시판 </Link>
            <Link to ="/profile"> 프로필 </Link>
        </div>
    );
}

export default Home;