import React, { useState } from 'react';
import '../App.css'

function CalculateV2() {
// useState 훅으로 정의한 변수는 상태 변수
  const [first,setFirst] = useState(0)
  const [second,setSecond] = useState(0)
  const [op,setOp] = useState('')
  const [result, setResult] = useState(0)
  
  // 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
  console.log('리렌더링',first, second)

  // OK 버튼 이벤트
  const handleCalculate = (e) => {
      const sel = e.target.innerHTML
      setOp(sel)
      // if ~ else if 을 넘많이필요할때
      switch (sel) {
        case '+':
          setResult(first+second)
          break;
        case '-':
          setResult(first-second)
          break;
        case '×':
          setResult(first*second)
          break;
        case '÷':
          setResult(first/second)
          break;
        default:
            //위의 case 값에 모두 해당되지 않을때
          setResult(0)
          break;
      }
  }


  return (
    <div>
          <h3>계산기 V2!!</h3>
 
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                value={first} 
                onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                value={second}
                onChange={(e) => setSecond(Number(e.target.value))}
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
    </div>
  )
}

export default CalculateV2;