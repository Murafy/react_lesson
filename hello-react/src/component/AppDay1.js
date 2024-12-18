import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./component/MyComponent";
import MyComponentProps from "./component/MyComponentProps2";
import MyComponentProps2 from "./component/MyComponentProps2";
import LogicalTest from "./component/LogicalTest";
import ComPod from "./component/ComPo";


function App() {
  return (
    <div className="App">
      <MyComponent />
      <hr />
      {/* 컴포넌트의 속성은 개발자가 임의로 만들수있음 데이터를 전달하려는 목적. (부모가 자식 컴포넌트에게)*/}
      <MyComponentProps
        title="props(프롭스)"
        content="props 는 여러 프로퍼티를 저장하는 객체"
        color="orange"
      />
      {/* 프롭스 값이 없을 때 오류는 아니다}*/}
      <MyComponentProps />
      <MyComponentProps2
        title="객체 비구조화"
        color="brown"
        content="없음"
        name="이객체"
      />
      {/*프롭스 값 정의 없이 콤포넌트 호출 : 초기값 적용되는지 확인 하세요.*/}
      <MyComponentProps2 />

      {/*단축평가 테스트 : title 프롭이 있는 경우만 컴포넌트 렌더링*/}
      <LogicalTest/>
      <LogicalTest title="React"/>
      
      {/*ComPo 가져오기 (ComPo 파일에 있는 변수명 (const 등) 이나 함수명)*/}
      <ComPod/>
    </div>
  );
}

export default App;
// ↑ 따로 써도되고 함수가 하나일경우 function 앞에 붙여도 됨
