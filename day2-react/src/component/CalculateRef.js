import React, { useState,useRef } from 'react';

function CalculateRef () {
    // useState 훅으로 정의한 변수는 상태 변수
    //   const [first,setFirst] = useState(0)
    //   const [second,setSecond] = useState(0)
      const [op,setOp] = useState('')
      const [result, setResult] = useState(0)

      //useState 로 만든 상태변수를 변경함. input 2개 입력은 상태 변수에서 제외함
      //화면을 다시 만들어야 하는 필요성은 연산 버튼을 클릭할 때 뿐임
      //useRef 는 상태를 계속 유지하는 방법이 필요할 때 State 대신 사용함 
      
      //사용방법 1 - DOM 요소를 ref 변수로 지정한다 
      const message = useRef()
      const first = useRef()
      const second = useRef()
      // 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
      console.log('CalculateRef 리렌더링',first, second)
      const hello = () =>{
        alert ("안녕" + message.current.value )
      }
      // OK 버튼 이벤트
      const handleCalculate = (e) => {
          const sel = e.target.innerHTML
       //useRef 로 만들어진 변수는 current 라는 속성으로 
      //필요한 데이터를 가져옴 input 요소에 입력된 값을 가져옴 
          const op1 = Number(first.current.value)
          const op2 = Number(second.current.value)
          setOp(sel)
          // if ~ else if 을 넘많이필요할때
          switch (sel) {
            case '+':
              setResult(op1+op2)
              break;
            case '-':
              setResult(op1-op2)
              break;
            case '×':
              setResult(op1*op2)
              break;
            case '÷':
              setResult(op1/op2)
              break;
            default:
                //위의 case 값에 모두 해당되지 않을때
              setResult(0)
              break;
          }
        }
    return (
             <div>
          <h3>input 에 ref 활용</h3>
          <p>입력 요소에 상태 변수를 사용허지 않고 ref 속성으로 DOM 요소 상태 저장
             ref 변수 정의는 useRef 훅(함수)로 함 
          </p>
 
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                ref={first}
                // value={first} 
                // onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                ref={second}
                // value={second}
                // onChange={(e) => setSecond(Number(e.target.value))}
          /> 
          <span id="op">=</span>
          <input type='text'
                 value={result} disabled
          />       
          <hr/>     
          <div className="calcBtn">
            <button onClick={handleCalculate}>+</button>
            <button onClick={handleCalculate}>-</button>
            <button onClick={handleCalculate}>×</button>
            <button onClick={handleCalculate}>÷</button>
          </div>
          <div>
            <h4>새로운 입력 요소로 테스트</h4>
            <input type='text' ref={message}/>
            {/* message는 useRef로 변수 선언해야함 */}
            <button onClick={hello}>인사하기</button>
          </div>
        </div>
    );
};

export default CalculateRef