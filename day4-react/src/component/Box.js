import React, { useState } from 'react';

// 외부에서 사용할 컴포넌트
function Box() {

  const [boxwidth,setWidth] = useState(100)
  const [boxheight,setHeight] = useState(100)
  const [boxleft,setLeft] = useState (600)
  const [boxtop,setTop] = useState (600)
  /*1.상태변수 boxleft, boxtop의 초기값을 600으로 설정하고 해당 초기값에서 변화가 있을때 렌더링(useState) 
      useState의 의해 상태변수의 값을 변하게 하는법은 setLeft, setTop 의 값을 변하게 해야함

    3. 초기값은 600이였지만 아래 handlePosition함수에서 setLeft 값이 변화하여 
       상태변수 boxleft의 값을 업데이트 받았으므로 boxleft = 590 값을 가짐 
  */
  

  
  const handlePosition = (e) => {
    switch (e.target.id) {
    case "left":
      setLeft(boxleft-10)
      break;
    
    case "right":
      setLeft(boxleft+10)
      break;
    
    case "up":
      setTop(boxtop+10)
      break;
    
    case "down":
      setTop(boxtop-10)
      break;
      default:
      break;
    }
  }
/*2. e.target.id는 버튼 클릭 시 각 버튼의 id를 가져옴 각 case와 비교하여 일치하는 경우 해당 동작을 실행함.
   예를 들어, "left" 버튼 클릭 시 boxleft의 값을 10 감소시키고,  그 값을 setLeft 함수를 통해 상태를 업데이트함.
*/
console.log(boxleft, boxtop)


  const handleResize = (e) => {
    switch (e.target.id) {
      case "width_inc":
        setWidth(boxwidth+10)
        break;
      case "width_dec":
        setWidth(boxwidth-10)
        break;
      case "height_inc":
        setHeight(boxheight+10)
        break;
      case "height_dec":
        setHeight(boxheight-10)
        break;
      default:
        break;
    }
  }
  console.log(boxwidth, boxheight)
  return (
    <>
      <button onClick={handleResize} id="width_inc">가로+</button>
      <button onClick={handleResize} id="width_dec">가로-</button>
      <button onClick={handleResize} id="height_inc">세로+</button>
      <button onClick={handleResize} id="height_dec">세로-</button>
      {/* 가로 세로 */}
      <button onClick={handlePosition} id="right">오른쪽</button>
      <button onClick={handlePosition} id="left">왼쪽</button>
      <button onClick={handlePosition} id="up">위로</button>
      <button onClick={handlePosition} id="down">아래로</button>
      {/* 위치 이동 */}
      <div id="container">
          <SandBox width={boxwidth} height={boxheight}
                   top={boxtop}     left={boxleft}/>
      {/*4. 부모 컴포넌트에서 자식 컴포넌트인 SandBox에게 top,left  값을 넘겨줌 
            (부모 => 자식 간 데이터를 넘길땐 props를 사용함)*/}
      </div>
    </>
  );
}
// 이 파일 안에서만 사용할 컴포넌트
function SandBox(props){   // 또는 SandBox({width,height})  
/*5.자식 컴포넌트인 SandBox가 (props)로 값을 넘겨받음 / props로 받으면 width,height,top,left 다 넘어옴 */
  const boxstyle = {
     width: `${props.width}px`,
     height: `${props.height}px`,
     left: `${props.left}px`,
     top: `${props.top}px`,
     /*6. 부모컴포넌트에게 전달받은 props값을 width,height,top,left 각각 나누고 CSS스타일 변화   */
     position:'absolute',
     background: 'yellow'
  }

  return (
    <div style={boxstyle}>
  {/*7.boxstyle 스타일 받아 박스 움직임*/}
    </div>
  )
}

export default Box;