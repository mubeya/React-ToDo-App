import {useState} from 'react'

function Form({newTodos, addNewTodos}) {
    const [form, setForm] = useState({id: newTodos.length + 1, todo:"", isComplete:"false"});  //inputtan yeni girilen todo değeri

    const onChangeInput = (e) => {  //kayıt işlemi için fonksiyon tanımladık
        setForm({...form, [e.target.name] : e.target.value});  // gelen kayıtları state ile alıp değişkenlere atadık
    }
    
    const onSubmit = (e) => {
        e.preventDefault();   // form elementi normal çalışma prensibi gereği onClick durumunda sayfayı yeniliyor
                              // Bu durumda aldığımız verileri kaydedemiyoruz o nedenle event prevent default metodu kullandık fonksiyonda
        if (form.todo === "") {   //inputların boş gelmesini koşul ile engelliyoruz
            return false;            
        }
        addNewTodos([...newTodos,form]); //önceki kayıtlar newTodos dizi içinde tutuluyor yeni kayıtları form ile gönderiyoruz
        setForm({id:newTodos.length + 2, todo:"", isComplete:"false"});  //form kayıt edildikten sonra inputlardaki değerleri sildik
    }

    return (
        <div>
          <h1>Todo List</h1>
          <form onSubmit={onSubmit}>   {/* form enter ile submit edildiğinde fonksiyonu çağırdık */}
			<input className="new-todo"  name ="todo" value={form.todo} placeholder="What needs to be done?" onChange={onChangeInput} autoFocus/>
		  </form>
        </div>
    )
}

export default Form
