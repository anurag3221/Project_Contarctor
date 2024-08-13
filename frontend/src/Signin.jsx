import React, { useState } from 'react'
import "./styles/signin.css"
import Header from './Header'
import { Link, useNavigate } from "react-router-dom";
import Footer from './footer';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Signin = () => {

  const navigate= useNavigate();

  const [user, setUser] = useState({
    email: "",
    passwordi: ""
  })

  // function to handle changes in input field 
  const handlechange = e => {
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }


  const login = (e) => {
    e.preventDefault();
    //check 1: if email and password is empty
        if (user.email === "" || user.passwordi === "") {
          toast('Enter Email and Password', {
            style: {
              background: 'red',
              color: "white"
            }
          });
        }
        else {
          //POST Request for login which goes with credentials in body
          axios.post(`http://localhost:9005/login`, user)
            .then((res) => {
              if (res.data.isLoggedIn === true) {
                localStorage.setItem('log', true)
                navigate('/complaint')
    
                // alert("ok h");
              }
              else if (res.data.isLoggedIn === false) {
                toast('Wrong Email or Password', {
                  style: {
                    background: 'red',
                    color: "white",
    
                  }
                })
              }
            }
    
            )
        }
    
      }
    















  return (
    <>
    <Header/>
    <div className='body'>
    <div className='signdiv'>
        <form>
          <div className='form-heading'>
          <h1>Sign-In</h1>
          </div>
          <div className='form-start'>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Email Address</label>
    <input type="email" className="form-control" name="email" value={user.email} onChange={handlechange} id="email" aria-describedby="emailHelp" placeholder='Email Address'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"name='passwordi' value={user.passwordi} onChange={handlechange} className="form-control" id="exampleInputPassword1" placeholder='Password'/>
  </div>
  <div className='submit'>
  
  <button type="submit" className="btn btn-primary btnsub" onClick={login}>Submit</button>
  </div>
  <br />
  <Link to='/forgot'>
  <a href="#">Forgot Password</a></Link>
  <br />
  <br/>
  <Link to='/signup'>
  <a href='#'><span className='dont'>Don't have an account?</span> <span className='sign-up'>Sign Up</span></a></Link>
  <br />
  </div>
</form>
    </div>
    <Toaster />
    </div>
    <Footer/>
    </>
  )
}

export default Signin