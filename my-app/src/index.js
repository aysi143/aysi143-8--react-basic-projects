import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './img/prof1.jpg'

const App=()=>{
    const style={backgroundColor:'blue', color:'white'};
    const textColor={texC:'white'};
    return(
        <div> 
            <label htmlFor="email">email</label>
            <input id='email' className='email'></input>
            <button style={style}>submit</button>
        </div>
    )
}
ReactDOM.render(<App/>,document.querySelector('#root'))