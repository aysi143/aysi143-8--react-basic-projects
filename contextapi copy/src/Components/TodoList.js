import React from "react";
import {ThemeContext} from '../Contexts/ThemeContext'

class TodoList extends React.Component{
    static contextType=ThemeContext;
    render(){
        const {isDarkTheme, lightTheme,darkTheme, changeTheme}=this.context;
        const theme =isDarkTheme? darkTheme: lightTheme;
        return(
            <div style={{background:theme.background, color:theme.text, height:'140px', textAlign:'center' }} >
                <p className="item">Let's design the best co</p>
                <p className="item">Choose your technology</p>
                <p className="item">Now is the perfect time</p>
                <button className="ui button priamary" onClick={changeTheme}>Theme</button>
            </div>
        )
    }
}

export default TodoList;