import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





//react 버전이 낮은 소스는 코드가 다를수있음
const root = ReactDOM.createRoot(document.getElementById('root'));
//eact.StrictMode 은 리액트 버전 19버전 부터 설정 . 오래된 API 관리등의 목적 
// ↑ 돔 요소를 가지고 오고 ↓ ID가 root 인 요소에 APP을 컴포넌트함 
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
