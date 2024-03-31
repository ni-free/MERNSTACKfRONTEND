import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';
import axios from 'axios';
let usid= sessionStorage.getItem("id")
function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} =  useTodo()

    const add = async (e) => {
        
      e.preventDefault()
   
      if (!todo) return
      await axios.post("https://mernstackbackend-lise.onrender.com/api/v1/todo/add",{title:todo,userid:usid}).then((res)=>{
        console.log(res)
    
    }

    )
      
      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
