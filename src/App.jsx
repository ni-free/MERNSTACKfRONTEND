import { useEffect, useState } from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from './pages/Todo'
import { useDispatch } from 'react-redux'
import { authentication } from '../store/index.js'


function App() {
const dispatch =useDispatch()
  const [count, setCount] = useState(0)
 useEffect(() => {
  const id=sessionStorage.getItem("id");
  if(id)
     dispatch(authentication.login())
 }, [])
 
  return (
    <main className='bg-slate-300/20 h-full'  >
    <Router>
     
     <Routes>
       <Route path='/' element ={<Home/>}/>
       <Route path='/register' element ={<Register/>}/>
       <Route path='/login' element ={<Login/>}/>
       <Route path='/todo' element ={<Todo/>}/>

       {/* <Route path='/about' element={<About/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/contact' element={<Contact/>}/> */}
     </Routes>
    </Router>
 </main>
  )
}

export default App
