import React, { useState } from 'react';

function Calculate () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState('')
//useState함수로 만들어진 상태변수는 값이 바뀔 때마다
//모든 변수값이 새로 계산되고 그 값으로 재렌더링 함 
//단, 상태 변수는 이전 값(상태)는 유지됨
    const handleAdd = ()=> {
        setResult(Number(value1) + Number(value2))
    }
    const handlesub = ()=> {
        setResult(value1 - value2)
    }
    const handlemul = ()=> {
        setResult(value1 / value2)
    }
    const handlediv = ()=> {
        setResult(value1 * value2)
    }
    const handlemulmul = ()=>{
        setResult(value1 ** value2)
    }
    return (
        <div>
            <input
                type='txt'
                placeholder='첫번째 값을 입력하세요'
                value={value1}
                onChange={(le) => setValue1(le.target.value)
                 //onChange 값이 바뀔때 이벤트 
                } 
            />
            <input
                type='txt'
                placeholder='두번째 값을 입력하세요'
                value={value2}
                onChange={(le) => setValue2(le.target.value)}
            />
            <button onClick={handleAdd}>더하기</button>
            <button onClick={handlesub}>빼기</button>
            <button onClick={handlemul}>나누기</button>
            <button onClick={handlediv}>곱하기</button>
            <button onClick={handlemulmul}>제곱</button>
            <div>
                결과 : {result}

            </div>
        </div>
    );
};

export default Calculate;