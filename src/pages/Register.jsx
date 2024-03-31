
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { register } from '../images/index.js'
const Register = () => {
    const history =useNavigate()
    const formRef = useRef(null)
    const [form, setForm] = useState({ fullname: '', email: "", username: '', password: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submit = async (e) => {
        e.preventDefault()
        console.log(form)
        axios.post("http://localhost:3000/api/v1/users/register", form).then((res) => {
            if(res.data.message==="User with username or email exist")
           alert(res.data.message)
        else {
            alert(res.data.message)
                 
        console.log(res)
        setForm({ fullname: '', email: "", username: '', password: "" })
        history('/login')
        }
       
        })



    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>


            <div className='flex-1 min-w-[50%] flex flex-col' >
                <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Register</h1>
                <form


                    className='w-full flex flex-col gap-7 mt-14'>
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input type="text"
                            name="fullname"
                            className='input'
                            placeholder='xyz'
                            required
                            value={form.name}
                            onChange={handleChange}

                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Username
                        <input type="text"
                            name="username"
                            className='input'
                            placeholder='xyz2'
                            required
                            value={form.username}
                            onChange={handleChange}

                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Password
                        <input type="password"
                            name="password"
                            className='input'
                            placeholder='xyz123'
                            required
                            value={form.password}
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
                    <button type='submit' className='btn'
                        onClick={submit}

                    >
                        Register
                    </button>
                </form>
            </div>
            <div>
                <img src={register} alt="" />
            </div>
        </section>
    )
}

export default Register
