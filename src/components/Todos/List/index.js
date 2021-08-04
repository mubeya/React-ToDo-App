import {useState} from 'react'

function List({newTodos, listType, newTodosLength, checkTodos, changeTodos, deleteTodos}) {
    let filteredList = [];

    if(listType === "All"){
        const allFiltered = newTodos.filter((item) =>{ // newTodos objectindeki tüm değerleri keylerine ayırdık böylece todo textlerini ekrana yazdıracağız
            return Object.keys(item)
        });
        filteredList = allFiltered;  //filtrelenen diziyi ekrana yazılacak diziye atadık
        newTodosLength(filteredList.length);
    }

    else if(listType === "Completed"){
        const copmletedFiltered = newTodos.filter((item) =>{ 
            return Object.keys(item).some((key) => {
                return item[key].toString().toLowerCase().includes(("true").toLocaleLowerCase());
            });
        });
        filteredList = copmletedFiltered;  
        newTodosLength(filteredList.length);
    }

    else if(listType === "Active"){
        const activeFiltered = newTodos.filter((item) =>{ 
            return Object.keys(item).some((key) => {
                return item[key].toString().toLowerCase().includes(("false").toLocaleLowerCase());
            });
        });
        filteredList = activeFiltered;  
        newTodosLength(filteredList.length);
    }   

    const [checked, setChecked] = useState(true);
    
    return (
        <div>
          <ul className="todo-list">
              {filteredList.map((todo,i) =>(
                (todo.isComplete === "true") ?   // ternary operatörü ile eğer todo durumu true ise tamamlandı olarak işaretliyoruz
                  <li className="completed" key={todo.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox" defaultChecked={checked} onChange={() => {setChecked(!checked); checkTodos(todo, i)}}/>
                        <label><input  defaultValue={todo.todo} onChange={e => {changeTodos(e,i)}} style={{all:"unset"}}/></label>
                        <button className="destroy" onClick={() => deleteTodos(todo)}></button>
                    </div>
                  </li> : 
                  <li key={todo.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox" defaultChecked={!checked} onChange={() => {setChecked(checked); checkTodos(todo, i) } }/>
                        <label><input  defaultValue={todo.todo} onChange={e => {changeTodos(e,i)}} style={{all:"unset"}}/></label>
                        <button className="destroy" onClick={() => deleteTodos(todo)}></button>
                    </div>
                  </li>
              ))} 
		 </ul>
        </div>
    )
}

export default List
