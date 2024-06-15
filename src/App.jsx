import AppName from "./component/AppName";
import AppTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodoIten1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {
  return (
    <>
      <center class="todo-container">
        <AppName />
        <AppTodo />
        <div class="item-container">
        <TodoItem1 />
        <TodoItem2 />
        </div>
       
      </center>
    </>
  );
}

export default App;
