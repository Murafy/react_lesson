import React from "react";

//부모컴포넌트에서 설정된 props는 객체를 분해하여 인자로 정의
//{title,color}는 객체 프로퍼티 중 title 과 color 만 저장합니다.
//function MyMyComponentProps2({title,color})
//                                ㄴ   ㄴ 해당 프로퍼티가 전된될 값이 없으면 ""초기값
function MyComponentProps2({ title = "React", color = "red" }) {
    //참고 : 객체.프로퍼티,객체.메소드()
  const h3title = {
    padding: "10px",
    color, // 객체에서 프로퍼티 이름과 변수명이 같으면 하나만 작성
  };
  console.log("MyComponentProps props:", title, color);
  //받는 쪽 : props 객체는 title, content 2개의 프로퍼티 값을 저장하도록 함
  //값을 주는 쪽 : 부모 컴포넌트가 값을 저장함
  return (
    <div className="box">
      <h3 style={h3title}>{title}</h3>
      <p>객체의 구조를 분해 (비구조화) 한 인자 정의</p>
    </div>
  );
}

export default MyComponentProps2;
