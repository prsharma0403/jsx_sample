import React from 'react';
import ReactDOM from 'react-dom';

const App=()=>{
const buttonText={text:'clickMe!'};
const labelText='Enter name:';
    return(<div>
        <label className="label" htmlFor ="name">{labelText}</label>
<input id="name" type="inputbox"/>
<button style={{backroundColor:'white',color:'green'}}>{buttonText.text}</button> 
    </div>);

};
ReactDOM.render(<App />,document.querySelector('#root'));