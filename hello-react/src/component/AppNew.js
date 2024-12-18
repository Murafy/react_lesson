import './App.css';

//함수 컴포넌트(최신)      //다른 방법 : 클래스 컴포넌트 (과거)
function AppNew() {
// 자바스크립트 문법으로 데이터 저장, if, for, 기존 메소드 사용

  return (
// 반드시 부모 요소 "1개"를 리턴함  스타일 줄꺼면 div / 아니면 <> </> 
    <>
      <h3>App 컴포넌트 새로 만들기</h3>
      <hr/>
    </>
  ); // JSX 문법 
}
// 다른 컴포넌트에서 해당 컴포넌트를 사용하려면 export default 를 지정해줘야함
export default AppNew; 

//컴포넌트를 만들고 export함 완전 조립식