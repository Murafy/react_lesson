import "../CSS/MyStyle.css";

// export default 를 function 앞에서 지정할수 있음
// 이 파일에 함수 1개 밖에 없어서 같이 정의함
export default function MyComponent() {
  //스타일 정의 객체
  const title = {
    padding: "10px",
    color: "skyblue",
  };
  // 스타일 이름은 background-color 는 - 을 뺴고 사용해야함
  return (
    //MyStyle.css 파일에 정의된 스타일 지정하기. className="Box"
    <div className="box">
      <h3 style={title}> 첫번째 컴포넌트 테스트</h3>
      <p style={{ backgroundColor: "bisque", margin: "10px" }}>
        1.CSS 스타일을 태그 안에서 정의하기 (인라인 스타일)
      </p>
      <p>2.인라인 스타일을 객체로 정의 하여 변수 활용하기</p>
      <p>3. css 파일 import </p>
    </div>
  );
}
