//버튼 2개로 페이지 번호를 앞 or 뒤로 이동
// 상태변수 1개
import React, { useState } from 'react';
function PageMove (last)  {
    const [nowpage, setNowpage] = useState(1)
    const right = () =>{
        setNowpage ((page) => page +1)
    }

    const left = () =>{
        setNowpage ((page) => page > 1 ? page - 1 : 1)
                        //페이지가 1보다 클때 -1 씩 빼라 : 1보다 작으면 넌 1이다
    }
    return (
        <div>
            <button onClick={left} disabled={nowpage === 1}>&lt;</button>
            <button onClick={right}>&gt;</button>
            <div>
            <h3> 페이지 : {nowpage} </h3>
            </div>
        </div>
    );
};

export default PageMove;