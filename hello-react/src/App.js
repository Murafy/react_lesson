import logo from "./logo.svg";
import "./App.css";
import List from './component/List'


function App() {
  const twice = ['사나','모모','나연','정연']
  return (
    <div className="App">
      <List names={['a','b','c','d']}/>
      <List names={twice}/>
      {/* <List/> */}
    </div>
  );
}

export default App;

