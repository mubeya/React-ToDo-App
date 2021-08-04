import React from 'react'
import { useState } from 'react';

function Footer({newTodos, setNewTodos, TodosLength, listItems}) {

const handleInput = (e) => {    //tıklanan butonun value değerini aldık ve todo componente gönderdik
	const inputVal = e.target.value;
	return listItems(inputVal);  
}

const [buttons, setButtons] = useState(["selected","",""]); //filtre butonlarının class değişimleri için state

const deleteAllCompletedTodo = () => {    //tamamlanmış olan todoları tek seferde siliyoruz
	const deletedNewTodos = newTodos.filter((todo) => todo.isComplete === "false");
	setNewTodos(deletedNewTodos);
  };  

	return (
        <div>
        	<span className="todo-count">
        		<strong>{TodosLength}</strong> items left
        	</span>
        	<ul className="filters">
        		<li>
        			<button className={buttons[0]}  onClick={e => {handleInput(e, "value"); setButtons(["selected","",""])}} value="All">All</button>
        		</li>
        		<li>
        			<button className={buttons[1]} onClick={e => {handleInput(e, "value"); setButtons(["","selected",""])}}  value="Active" >Active</button>
        		</li>
        		<li>
        			<button className={buttons[2]} onClick={e => {handleInput(e, "value"); setButtons(["","","selected"])}} value="Completed">Completed</button>
        		</li>
        	</ul>
        	<button className="clear-completed" onClick={() => deleteAllCompletedTodo()}>Clear completed</button>
        </div>
    )
}

export default Footer
