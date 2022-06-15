import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState,useEffect} from 'react'
import "./Loginstyles/adminloginn.css"
import video from "../Component/assestt/loginback.mp4"
function Adminlogin() {
    const [user,setUser]=useState('')
    const[pass,setPass]=useState('')
    useEffect(()=>
    {
        console.log({pass})
    })
    useEffect(()=>
    {
        console.log({user})
    })


    const userchange=(event)=>

    {
        setUser(event.target.value)

    }
    const passchange=(event)=>

    {
        setPass(event.target.value)

    }
    
    const navigate=useNavigate()
    const handlesubmit= (event)=>
    {
        event.preventDefault()
        console.log(user,pass)
        alert('sucessfully signned in')
        navigate('/')
    }
  return (
        <div className='signin'>
             <div className='img'>
                <video src={video} autoplay loop muted></video>
            </div>
            <div className='container'>
                <h1>LOG IN</h1>
                <div className='form'>
                    <form onSubmit={handlesubmit}>
                        <label htmlFor='userID'>User ID:  </label>
                        <input type='text' placeholder="Enter your User ID" value={user} onChange={userchange} required/><br/>
                        <label htmlFor='Password'>Password:</label>
                        <input type='password'  placeholder='Enter your Password' value={pass} onChange={passchange} required/><br/>
                        <div className='btn1'>
                        <button type="submit">Log in</button>
                        </div>
                    </form>
                    <div  className="btn2" >
                    <button  onClick={()=>navigate('/')} >Cancel</button>
                    </div>
                   <p><a href='/forgetpassword'>Forgot Password?</a></p>
                </div>
            </div>
           

        </div>
  )
}

export default Adminlogin