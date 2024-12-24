import React, { useState } from 'react';

function BoxV2(props) {
  const [box,SetBox] = useState({
    width : 100,
    height : 100,
    left : 300,
    top : 300
  })
    //상태 변수 box를 바꿀 때, 특정 프로퍼티만 바꾸지 말고
    //개체 자체를 바꾸어야 합니다.
  const handleBox = (e)=> {
    switch(e.target.id) {
      case "width_inc" :
      SetBox({...box, width:box.width + 10})
      //상태 변수 box를 복사해서 width 값만 바꾼거로 새로운 객체 생성 
      break;
      case "width_dec" :
      SetBox({...box, width:box.width - 10})
      break;
      case "height_inc" :
      SetBox({...box, height:box.height + 10})
      break;
      case "height_dec" :
      SetBox({...box, height:box.height - 10})
      break;
      case "right" :
      SetBox({...box, left:box.left + 10})
      break;
      case "left" :
      SetBox({...box, left:box.left - 10})
      break;
      case "up" :
      SetBox({...box, top:box.top - 10})
      break;
      case "down" :
      SetBox({...box, top:box.top + 10})
      break;
      default:
      break;
    }
  }
  return (
    <div>
      <button onClick={handleBox} id="width_inc">가로+</button>
      <button onClick={handleBox} id="width_dec">가로-</button>
      <button onClick={handleBox} id="height_inc">세로+</button>
      <button onClick={handleBox} id="height_dec">세로-</button>
      {/* 가로 세로 */}
      <button onClick={handleBox} id="right">오른쪽</button>
      <button onClick={handleBox} id="left">왼쪽</button>
      <button onClick={handleBox} id="up">위로</button>
      <button onClick={handleBox} id="down">아래로</button>

      <div id='container'>
        {/* Box 상태변수는 4개의 프로퍼티를 갖는 '객체'로 테스트 */}
        <SandBox box={box}/>
      </div>
    </div>

  );
}
// 퀴즈 : props를 객체 분해하여 바꿔서 실행하기
function SandBox({box}){
  const boxstyle = {
    width: `${box.width}px`,
    height: `${box.height}px`,
    left: `${box.left}px`,
    top: `${box.top}px`,
    
    position:'absolute',
    background: 'red'
 }
 return (
  <div style={boxstyle}>

  </div>
 )
}

export default BoxV2;