import React, { useState } from 'react';

function InputState() {
   
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    //상태 변수 username 과 nickname 값이 변경되면 리렌더링
    console.log('리렌더링',username,nickname)
    const handleOk = () => {
        alert(`${username} : ${nickname}`)
        setUsername('')
        setNickname('')
    };

    // 닉네임 input 이벤트
    const handleNickKeydown = (e) => {
        if (e.key === 'Enter') {
            handleOk()
        }
    };

    return (
        <div>
            <h3>input 에 state 변수 활용</h3>
            <p>input value 에 상태변수를 적용하면 onChange 이벤트 필수 </p>
            <hr />
            <input
                type='text'
                placeholder='사용자 이름 입력하세요'
                value={username}
                onChange={(e) => setUsername(e.target.value)} //e의 target 지정 = value 값 가져와라 
            />
            <input
                type='text'
                placeholder='사용자 닉네임 입력하세요'
                value={nickname}
                onKeyDown={handleNickKeydown}  // 수정: onKetDown -> onKeyDown
                onChange={(e) => setNickname(e.target.value)}
            />
            <button onClick={handleOk}>입력완료</button>
            이름 : {username} , 닉네임 : {nickname}
        </div>
        
    );
    
}

export default InputState;
