import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';


//메뉴가 필요한 페이지에서 모두 포함될 수 있도록
// route 를 중첩함 
function Header(props) {
    const [name,setName] = useState ('')
    const Profile_url =`/profile/${name}`
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/about">소개</Link>
                    </li>
                    <li>
                    <Link to="/board">게시판</Link>
                    </li>
                    <li>
                    <Link to="/board?title=react&writer=해린">(예)게시판 목록 조회</Link>
                    </li>
                    <li>
                    <Link to="/profile">프로필</Link>
                    <ul>
                        {/* App.js 에서 라우트 정보 path에 /profile/:username
                            username 변수에 해당하는 값을 Link 에 추가 
                            값을 받는 곳은 profile 컴포넌트. */}
                        {/* <li>민지 <Link to="/profile/minji">프로필</Link></li>
                        <li>해린 <Link to="/profile/haerin">프로필</Link></li>
                        <li>카리나 <Link to="/profile/karina">프로필</Link></li> */}
                        <li>
                            <select onChange={(e)=>setName(e.target.value)}>
                                <option>선택</option>
                                <option value ={'minji'}>민지</option>
                                <option value ={'haerin'}>해린</option>
                                <option value ={'karina'}>카리나</option>
                            </select>
                            <span>
                                <Link to={Profile_url}>프로필</Link>
                            </span>
                        </li>

                    </ul>
                    </li>
                </ul>
            </nav>
            {/* 부모 라우터의 컴포넌트가 자식 라우터 컴포넌트를 포함하도록 시킴 */}
            <Outlet/>
        </div>
    );
}

export default Header;
