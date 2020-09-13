 import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Firstbox} from './assets/Firstbox';
import {Secondbox} from './assets/Secondbox';
// import Thirdbox from './assets/Thirdbox';



 function App() {
    return (
        <div>
        <Firstbox/>
        <Secondbox/>
        {/* <Thirdbox/> */}
        </div>
    );
}

export default App;
