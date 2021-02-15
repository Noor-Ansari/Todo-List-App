import React from 'react';
import "./App.css"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem" 
import {useSelector} from "react-redux";
import {selectTodoList} from "./features/todoSlice";

function App() {
	const todoItem = useSelector(selectTodoList)
	return (
    <div className="App">
    	<div className="app-container">
    		<Input/>
    		<div className = "app-todolist-container">
	    		{todoItem.map(item =>
	    			<TodoItem name={item.item} done={item.done} id={item.id}/>
	    			)
	    		}
    		</div>
      	</div>
    </div>
  );
}

export default App;
