import React, { useState } from 'react';

function Box() {
    // // const boxsize = {
    // //     width: 100,
    // //     height: 100,
    // }


    //boxsize 변수를 상태 변수로 정의하세요. 초기값은 boxsize 입니다.
    const [width,setWitdh] = useState(100)
    const [height,setHeight] = useState(100)
    
    const HandleResize = (e) =>{
        switch (e.target.id) {
        case "width_inc":
            setWitdh(width+10)
        break;
         case "width_dec":
            setWitdh(width-10)
        break;
         case "height_inc":
            setHeight(height+10)
        break;
         case "height_dec":
            setHeight(height-10)
        break;
        default:
        break;
        }
    }
    return (
        <>
            {/* 숙제 : 위치 이동 버튼 4개 추가. 함수이름 handlePosition 
                state(상태) 변수 이름 : boxleft, boxtop
            */}
                
           <button onClick={HandleResize} id="width_inc">가로+</button>
           <button onClick={HandleResize} id="width_dec">가로-</button>
           <button onClick={HandleResize} id="height_inc">세로+</button>
           <button onClick={HandleResize} id="height_dec">세로-</button>
        <div id="container">
            {/* SandBox 렌더링 하기 위해 너비, 높이를 전달해 줍니다. */}
            <SandBox width={width} height={height}/>
        </div>
        </>
    );
}
// 이 파일 안에서만 사용할 컴포넌트
function SandBox(props){ //{witdh,height} <- 요렇게 따로받던가 (구조분해)
                         //props <- (통으로 받아서 아래에서 놔눠주거나)
    //스타일 적용할 객체
    //Box 컴포넌트에서 전해준 너비, 높이를 스타일 객체에 적용합니다.
    const boxstyle={
        width: `${props.width}px`,
        height: `${props.height}px`,
        left: '600px',
        top: '600px',
        position:'absolute',
        background: 'yellow'
    }
    return (
        <div style={boxstyle}>

        </div>
    )
}
export default Box;