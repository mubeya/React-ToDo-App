import {useState} from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";
import "./style.css";


function Todo() {
    const [newTodos, setNewTodo] = useState(  //todolist için dizi tanımladık içinde object olarak, başlangıç değer verdik 
      [
        {
          id:1,
          todo :"Learn React",
          isComplete :"true"
        },
        {
          id:2,
          todo :"Write Code!",
          isComplete :"false"
        }
      ]);

    console.log(newTodos);
    const [TodosLength, setTodosLength] = useState(newTodos.length);  //todolist uzunluğunu tutmak için bir state tanımladık

    const newTodosLength = (filteredListLength) =>{   //Filtreye göre todolist uzunluğunun yeni değerini state'e atadık
      setTodosLength(filteredListLength);
    }  

    const [listType, setListType] = useState("All"); //footerdan gelecek listtype tutuluyor ve List componente prop olarak gönderiliyor
    
    const listItems = (inputVal) => {  //gelen değeri fonksiyon parametresi olarak aldık Footer componente prop olarak gönderdik
        setListType(inputVal);
    }

    const checkTodo = (todo, index) => {   //checkbox ikonuna tıklandığında todo işin durumunu sürekli değiştiriyoruz
        const checkedNewTodos = [...newTodos];
        if (todo.isComplete === "false") {checkedNewTodos[index] = { ...todo, isComplete: "true"};}
        else  checkedNewTodos[index] = { ...todo, isComplete: "false"};
        setNewTodo(checkedNewTodos);
    }

    const changeTodo = (e,index) =>{
        e.preventDefault();
        const changedNewTodos = [...newTodos];
        changedNewTodos[index] = {todo:e.target.value, isComplete:newTodos[index].isComplete};
        setNewTodo(changedNewTodos);
    }
    
    const deleteTodo = (todos,index) => {
        const deletedNewTodos = newTodos.filter((todo) => todo !== todos); 
        setNewTodo(deletedNewTodos);
    }
    

    return (
      <section className="todoapp">
        <header className="header">
          <Form newTodos={newTodos} addNewTodos={setNewTodo} />
        </header>
           
        <section className="main">
          <List newTodos={newTodos} setNewTodos={setNewTodo} listType={listType} newTodosLength={newTodosLength} checkTodos={checkTodo} changeTodos={changeTodo} deleteTodos={deleteTodo}/>
        </section>  
        
        <footer className="footer">
          <Footer newTodos={newTodos} setNewTodos={setNewTodo} TodosLength={TodosLength} listItems={listItems} />
        </footer>
      </section>
    )
}

export default Todo
