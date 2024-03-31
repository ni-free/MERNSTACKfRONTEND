import { useState, useEffect } from 'react'
import {TodoProvider} from './context'
import { useDispatch } from 'react-redux'
import { authentication } from '../../store/index.js'
import { useNavigate } from 'react-router-dom'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

let usid= sessionStorage.getItem("id")

function Todo() {
    const [input,setInput]=useState([])
    const history =useNavigate()
    const dispatch =useDispatch()
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
     
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
   
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    let todos
    try {
       todos = JSON.parse(localStorage.getItem("todos"))
  } catch (error) {
      console.error('Error parsing JSON:', error);
  }
    

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

const logout= ()=>{
dispatch(authentication.logout())
sessionStorage.clear("id")
history("/login")

}

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     
      <div className="bg-[#172842] min-h-screen py-8">
               <button type="button" onClick={logout} className='btn'>Logout</button>
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default Todo