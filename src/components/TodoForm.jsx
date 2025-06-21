import React, { useState } from 'react';


function TodoForm(props){

    const [todo,setTodo] = useState("")
    
    function handleSubmit(e){
            e.preventDefault();
            props.addTodo(todo);
            setTodo("")
    }
    function addTodo(e){
        setTodo(e.target.value);
    }

  return (
    <>
    <div className='form-main'>
    <form onSubmit={handleSubmit}>
        <input type='text' id='task' name='task' value={todo} onChange={addTodo} placeholder='ENTER YOUR TASK' required ></input>
        <button>ADD TASK</button>
    </form>
    </div>
    </>
  )
}

export default TodoForm
