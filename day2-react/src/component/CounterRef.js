import React,{useRef, useState} from 'react';

function CounterRef() {
    const counterRef = useRef(2)
    const [count,setCount] = useState(10)

    const handleCount = ()=> setCount(count+1)
    const handleCountRef = ()=> counterRef.current +=1
    console.log('CounterRef 렌더링 : ',counterRef)
    return (
        <div>
            <p>state 카운터 : {count}</p>
            {/* useRef 로 만든 변수가 DOM 요소 참조할 때에는 변수명.current.value 와 같이
            추가 속성지정 (input일 경우 value로 값을 가져옴) DOM 요소 아니고
            일반 데이터는 변수명.current 로 값을 가져옴 */}
            <p>ref 카운터 : {counterRef.current}</p>
            <button onClick={handleCount}>state 카운트</button>
            <button onClick={handleCountRef}>ref 카운트</button>
        </div>
    );
}

export default CounterRef

