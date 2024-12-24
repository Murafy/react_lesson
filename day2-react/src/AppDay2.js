import './App.css'
import Calculate from './component/Calculate';
import CalculateV2 from './component/CalculateV2';
import InputState from './component/InputState';
import PageMove from './component/PageMove';
import Say from './component/Say';
function App(){

    return(
    <div className='App'>
        <div>
        <h3>테스트</h3>
        <Say/>
        <hr/>
        <InputState/>
        <hr/>
        <Calculate/>
        <hr/>
        <CalculateV2/>
        <hr/>
        <PageMove last={12}/>
        </div>
        
    </div>
    )
}
export default App;