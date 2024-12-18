import { useState } from "react"

// 교재 112페이지
function Say() {
    //message 변수는 상태변수. 값을 변경하려면 useState 가 리턴한 setXXX 메소드실행 해야함
    const [message, setMessage] = useState('test')
    //useState()인자로 message 상태변수의 기본값을 설정함
    const [color,setcolor] = useState ('green')

    //function 키워드는 함수 컴포넌에만 사용하고
    //인자로 전달할 함수는 화살표 함수로 하겠음
    const handleEnter =(e)=> {setMessage('환영합니다')}
    //이벤트 정보 저장하는 인자 e는 필요시에만 정의
    const handleOut =(e)=> {setMessage('Good Bye!!!')}
    //이벤트 정보 저장하는 인자 e는 필요시에만 정의
    
    // ocClick 속성값은 이벤트 처리 함수가 되어야 함
    // JSX 문법 안에서는 {} 자바스크립트코드 코드값 (변수,수식,함수,객체,배열,문자열,number...) 가능

    const handleRed = ()=> {setcolor('Red')}
    const handleBlue = ()=> {setcolor('Blue')}
return (
    <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleOut}>퇴장</button>
        <h3 style={{color}}>{message}</h3>
        {/* 버튼 3개를 만들어서 클릭에 따라 h3태그 색상변경 */}
        <button onClick={handleRed}>Red</button>
        <button onClick={handleBlue}>Blue</button>
        <button onClick={()=>setcolor('Violet')}>Violet</button>
    </div>
)
}
export default Say;

