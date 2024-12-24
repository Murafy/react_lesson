import React, { useReducer } from 'react';
// reducer 함수는 개발자가 상태값을 바꾸기 위해 작성.
// 정해진 인자 : 첫번째 상태 변수 값 객체, dispatch 를 통해서 자동으로 전달. 
//         두번째 추가 데이터 action 객체. 대표적으로 type, payload 
function reducer(state , action){
    //useReducer 함수에서 꼭 필요한 reducer 함수 
    let {width, height, left, top} = state
         //상태 변수값 
    switch (action.type) {
        case "width_inc":
            width += 20;
            break;
        case "width_dec":
            width -= 20;
            break;
        case "height_inc":
            height+= 20;
            break;
        case "height_dec":
            height-= 20;
            break;
        case "left":
            left-= 20;
            break;
        case "right":
            left+= 20;
            break;
        case "up":
            top-= 20;
            break;
        case "down":
            top+= 20;
            break;
        
        default:
            break;
    }
    //새로운 상태값 객체 리턴
    return { width,height,left,top}
}

function BoxReducer() {
    // 컴포넌트 함수 
    const box = {
        // 초기값 
            width : 100,
            height : 100,
            left : 300,
            top : 300
          }
    //Boxv2 에서 4개의 state를 관리하기 위해 4개의 변경 메소드 사용
    //-> setWidth,setHeight,setLeft,setTop
    //useReducer 는 많은 상태변수에 대해 사용해야하는 변경 메소드를
    //줄여주는 방법을 제공함 
    
    const [state, dispatch] = useReducer(reducer,box)
    //useReducer 함수의 리턴값 
    //state 는 상태변수 . 객체 타입
    //dispatch 는 상태변수를 변경하는 메소드
    //함수의 인자 reducer 는 개발자가 정의하는 상태변경 함수
    //            size 는 초기값 
    console.log('state:',state)

    const handleResize = (e)=>{
        const action = {type: e.target.id}
        // alert(action.type)
        //dispatch 실행할 때 action 만 reducer 함수에 전달. state는 알아서 가져감 
        //dispatch 를 통하여 reducer 함수를 실행함 
        dispatch({type:action.type})
        console.log(state)
    }

    return (
        <>
            <div>
                <button onClick={handleResize} id="width_inc">width+20</button>
                <button onClick={handleResize} id="width_dec">width-20</button>
                <button onClick={handleResize} id="height_inc">height+20</button>
                <button onClick={handleResize} id="height_dec">height-20</button>
            </div>
            <div>
                <button onClick={handleResize} id="right">right+20</button>
                <button onClick={handleResize} id="left">left-20</button>
                <button onClick={handleResize} id="up">up+20</button>
                <button onClick={handleResize} id="down">down-20</button>
            </div>
            <div id='container'>
                <Box box={state}/>
            </div>
        </>
    );
}

function Box({box}){

    const sandbox = {
            width: `${box.width}px`,
            height:`${box.height}px`,
            left: `${box.left}px`,
            top: `${box.top}px`,

            position:'absolute',
            background: 'pink'
    }
    return (
        <div style={sandbox}>

        </div>
    )
}

export default BoxReducer;