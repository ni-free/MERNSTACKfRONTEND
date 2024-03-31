import React, {useState,useRef} from 'react'
import { login } from '../images/index.js'
import axios from 'axios'
import Register from './Register.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authentication } from '../../store/index.js'
const Login = () => {
    const dispatch =useDispatch()
    const history =useNavigate()
    const formRef=useRef(null)
    const[form ,setForm] =useState({username:'',email:"",password:''})
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
       }
       const submit = async (e) => {
        e.preventDefault()
        console.log(form)
       await axios.post("http://localhost:3000/api/v1/users/login", form).then((res) => {
            if(res.data.message==="User doesnot exist please register first"){
           alert(res.data.message)
           setForm({ fullname: '', email: "", username: '', password: "" })
        history('/register')
            }
        else if(res.data.message==="User Logged in Successfully") {
            alert(res.data.message)
                 
       console.log(res)
         setForm({ fullname: '', email: "", username: '', password: "" })
         sessionStorage.setItem("id",res.data.data.user._id)
         dispatch(authentication.login())

        history('/todo')
        }
        else{
            alert(res.data.message)
        }
       
        })




    }
const toregister=(e)=>{
    history('/register')
}
       
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
   

    <div className='flex-1 min-w-[50%] flex flex-col' >
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Please Login</h1>
        <form 
        
      
        className='w-full flex flex-col gap-7 mt-14'> 
           <label className='text-black-500 font-semibold'>
            Username
            <input type="text" 
            name="username" 
            className='input' 
            placeholder='xyz' 
            required
            value={form.username}
            onChange={handleChange}
           
             />
           </label>
           <label className='text-black-500 font-semibold'>
            Email
            <input type="email" 
            name="email" 
            className='input' 
            placeholder='xyz@gmail.com' 
            required
            value={form.email}
            onChange={handleChange}
          
             />
           </label>
           <label className='text-black-500 font-semibold'>
            Password
            <input type="password" 
            name="password" 
            className='input' 
            placeholder='xyz@gmail.com' 
            required
            value={form.password}
            onChange={handleChange}
          
             />
           </label>
           
           <button type='submit' className='btn'
        onClick={submit}
         
           >
         LOG IN
           </button>
           <button type='submit' className='btn'
        onClick={toregister}
         
           >
         Register
           </button>
        </form>
    </div>
    <div>
        <img src={login} alt="" />
    </div>
   </section>
  )
}

export default Login
