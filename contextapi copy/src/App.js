import react from "react";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar/>
            <TodoList/>
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
