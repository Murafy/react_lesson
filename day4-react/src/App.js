import React from 'react';
import './App.css'
import BoxReducer from './component/BoxReducer';
import Calculate from './component/CalculateReducer';

function App(props) {
    return (
        <div>
            <Calculate/>
        </div>
    );
}

export default App;