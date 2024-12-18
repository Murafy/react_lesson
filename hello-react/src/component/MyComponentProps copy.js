import React from 'react';

//props 는 객체. 프로퍼티들이 부모 컴포넌트에서 속성으로 전달되면
//                       그값들을 저장하기위해 인자로 정의함 
function MyComponentProps(props) {
    const title ={
        padding: '10px',
        color: 'green'
    }
    console.log ('MyComponentProps props:', props)
    //받는 쪽 : props 객체는 title, content 2개의 프로퍼티 값을 저장하도록 함
    //값을 주는 쪽 : 부모 컴포넌트가 값을 저장함
    return (
        <div className='box'>
            <h3 style={title}>{props.content}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default MyComponentProps;

