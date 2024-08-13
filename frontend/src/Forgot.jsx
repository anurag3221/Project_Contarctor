import React, { useState } from 'react'
import Header from './Header'
import './styles/forgot.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Forgot = () => {

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


      const inputs = document.querySelectorAll("#otfield input");


  inputs.forEach((input, index) => {
      input.dataset.index = index;
      input.addEventListener("keyup", handleOtp);//  event listner which moves to next block on enetering value 
      input.addEventListener("paste", handleOnPasteOtp);  // event listener which handels the paste function 
  });
  
  // otp function which handels otp on entering values in blocks.
  function handleOtp(e) {
      const input = e.target;    
      let value = input.value;   // input value of block which we enter
      let isValidInput = value.match(/[0-9a-z]/gi);   // check fo validating input is it lies b/w 0 to 9 or a to z. 
      input.value = "";
      input.value = isValidInput ? value[0] : "";    // ternary operator if valid input it assigns with the value in input block otherwise blank string assigned to it.
  
      let fieldIndex = input.dataset.index;        // get the index of input
      if (fieldIndex < inputs.length - 1 && isValidInput) {        // if condition to jump on to next block automaticaly after entering value in it.
          input.nextElementSibling.focus();
      }
  
      if (e.key === "Backspace" && fieldIndex > 0) {     // if condition when we click on backspace
          input.previousElementSibling.focus();
      }
  }

  // function for pasting otp from clipboard to input blocks
  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");   // gets the copied text data from clipboard and store it in const
    const value = data.split("");   // splits the value sepreatly of the copied data
    if (value.length === inputs.length) {    // checks that the length of value is equal to no of coloumns for otp
        inputs.forEach((input, index) => (input.value = value[index]));   // assigns each value to each box of otp
    }
}



      const [Otp, setOtp] = useState("")

  // function when we click on send otp on fogot password page
  const forgotOtp = (e) => {
    e.preventDefault();
    let otp_val = Math.floor((Math.random() * 900000) + 100000);   // method to generate 6 Digit otp
    setOtp(otp_val)    // set the generated otp in state
    const email=user.email;
    // const valemail = validator.isEmail(emu)     //check for is entered email is valid or not using npm validator
    if (email) {

      const cred = {otp_val,email}
// POST request to send reset otp mail
      axios.post(`http://localhost:9005/resetotpmail`, cred)
        .then((res) => {
          if (res.data.find === false) {
            toast('User Not Found', {
              style: {
                background: 'red',
                color: 'white'
              }
            })
          }
          else {
            document.getElementById('otfield').style.display = 'block';
            document.getElementById('submitbtn2').style.display = 'block';
            document.getElementById('oootpbtn').style.display = 'none';
            document.getElementById('pswrdresetv').style.display = 'block';


            
            toast('OTP sent to Email', {
              style: {
                background: 'green',
                color: 'white'
              }
            })
          }
        })

    }
    else {
      toast('Enter your correct Email', {
        style: {
          background: 'red',
          color: 'white'
        }
      })
    }

  }






  const changepassword = () => {


    let validotp = "";
    inputs.forEach((input) => {
      validotp += input.value;       // set valid OTP from input value which ve enter in blocks of OTP 
    });       



    const emu = user.email;
  
    if (emu && user.passwordi.length > 6 && Otp == validotp) {  // check conditions for change password is they are valid 
      //Post request for change password
      axios.post(`http://localhost:9005/reset`, user)
        .then(res => console.log(res))
        .then(navigate('/login'))
        .then(
          toast('Password Updated', {
            style: {
              background: 'green',
              color: 'white'
            }
          })
        )
    }
    else {
      toast('Enter Correct Details', {
        style: {
          background: 'red',
          color: "white"
        }
      });
    }
  }
















  return (
    <div>
        <Header/>
    <div className='body'>
    <div className='signdiv'>
          <div className='form-heading'>
          <h1>Forgot</h1>
          </div>
          <div className='form-start'>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={user.email} onChange={handlechange} id="email" aria-describedby="emailHelp" placeholder='Email Address'/>
  </div>
  <div className="mb-3" id='pswrdresetv'>
    <label for="exampleInputPassword1" className="form-label">New Password</label>
    <input type="password"name='passwordi' value={user.passwordi} onChange={handlechange} className="form-control" id="exampleInputPassword1" placeholder='Enter New Password'/>
  </div>
  <div className='submit'>
  
  {/* <button type="submit" className="btn btn-primary btnsub" onClick={login}>Submit</button> */}
  </div>

  <div class="input-group mb-1 otp-field" id="otfield">
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input class="space" type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
  </div>
              <div className="input-group mb-3 bro">
                <button className="text-black btn btn-lg btn-primary w-100 fs-6" id="oootpbtn" onClick={forgotOtp} >Send OTP</button>
              </div> <br />
              <div className="input-group mb-3 bro">
                <button type='submit' className="text-black btn btn-lg btn-primary w-100 fs-6"  id='submitbtn2' onClick={changepassword}>Submit</button>
              </div> <br />



    </div>
    </div>
    <Toaster />
    </div>
    </div>
  )
}

export default Forgot