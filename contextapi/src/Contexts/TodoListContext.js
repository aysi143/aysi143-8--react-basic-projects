import React, {createContext, useReducer} from "react";
import { todosReducer } from "../reducers/todoReducer";
export const TodoListContext= createContext();

const TodoListContextProvider= ({children})=>{
   const [todos, dispatch] =useReducer (todosReducer, [
         {text: 'Print t-shirt ordered', id:1},
         {text: 'Print cape ordered', id:2},
         {text: 'Print bord ordered', id:3}
    ]);
    return(
        <TodoListContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;