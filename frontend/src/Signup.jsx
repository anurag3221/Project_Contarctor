import React, { useState } from 'react'
import Header from './Header'
import "./styles/signup.css"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Signup = () => {
  const navigate= useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword:""
  })
  const handlechange = (e) => {
    e.preventDefault();
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

  const otp = (e) => {
    e.preventDefault();
    // const resenbt = document.getElementById('resendo');   // In starting the resend  button is disabeled
    // resenbt.disabled = true;                             
    let otp_val = Math.floor((Math.random() * 900000) + 100000);   // method to generate a 6 digit otp
    setOtp(otp_val)    // generated otp is set to otp using setotp.
    // const edis = document.getElementById('email')            // disabled the email input field after generating otp.
    // edis.disabled = true;
    // const ndis = document.getElementById('inname')             // disabled the name input field after generating otp.
    // ndis.disabled = true;


    // const emu = user.email;                     // stores the user email in emu
    const { email,name, password, confirmpassword } = user                       // calls name and password from user
    // const valemail = validator.isEmail(emu)           // checks that validates the entered email is valid or not
    if ( email && password.length > 6 && name !== "" && password === confirmpassword) {   // if condition to validate and then send otp 
      // setTimeout(() => {
      //   document.getElementById('resendo').disabled = null;                 // resend otp btn disabled for 20 seconds
      // }, 20000);
      // const pdis = document.getElementById('inpass')
      // pdis.disabled = true;                                      // disabled paswoord input field
      // const cpdis = document.getElementById('inpasscon')            
      // cpdis.disabled = true;                                    // disabled password confirm field after otp generation
      const cred = { otp_val, email}
      // document.getElementById('resendo').style.display = 'block'
      document.getElementById('otfield').style.display = 'block';
      document.getElementById('oootpbtn').style.display = 'none';
      document.getElementById('submitbtn').style.display = 'block';

      axios.post(`http://localhost:9005/otpmail`, cred)      // post request to send otp for registration
        .then(res => console.log(res))

      toast('OTP sent to Email', {
        style: {
          background: 'green',
          color: 'white'
        }
      })
    }
    else if (password !== confirmpassword) {
      toast('Re-enter correct password', {
        style: {
          background: 'red',
          color: 'white'
        }
      })
    }
    else {
      toast('Enter your Details Correctly', {
        style: {
          background: 'red',
          color: 'white'
        }
      })
    }

  }



















  const register = (e) => {
    

    e.preventDefault();


    let validotp = "";
    inputs.forEach((input) => {
        validotp += input.value;                             // set valid otp from entered inputs in blocks
    });

    const { name, email, password ,confirmpassword} = user
    if (name && email && password===confirmpassword && validotp==Otp) {          // check with various conditions
      axios.post('http://localhost:9005/regi',user)          // Post request to register admin 
      .then((res)=>{
        console.log(res);
        navigate('/login');
      })
    }
    else {
      toast('Fill all the Details Correctly', {
        style: {
          background: 'red',
          color: 'white'
        }
      });
    }
  }




  return (
    <>
    <Header/>
     <div className='body'>
    <div className='signdiv1 bg-slate-600'>
        <form>
           <div className='form-heading'>
          <h1>Sign-up</h1>
          </div>

    <div className='form-start'>
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name" value={user.name} onChange={handlechange} className="form-control" id="iname" aria-describedby="emailHelp" placeholder='Enter Your Name'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={user.email} onChange={handlechange} className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email Address'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={user.password} onChange={handlechange} className="form-control" id="exampleInputPassword1" placeholder='Password'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password"  name="confirmpassword" value={user.confirmpassword} onChange={handlechange} className="form-control" id="exampleInputPassword2" placeholder='Confirm Password'/>
  </div>
 <div class="input-group mb-1 otp-field" id="otfield">
  <label for=" " className="form-label">Please Enter OTP</label>
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input class="space" type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                 <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />

  </div>
              <div className="input-group mb-3 bro">
                <button className="text-black btn btn-lg btn-primary w-100 fs-6" id="oootpbtn" onClick={otp} >Send OTP</button>
              </div> <br />
              <div className="input-group mb-3 bro">
                <button type='submit' className="text-black btn btn-lg btn-primary w-100 fs-6" onClick={register} id='submitbtn' >Submit</button>
              </div> <br />
 <Toaster />
  <br />
  </div>
  
</form>
    </div>
    </div>
    
    {/* <Footer/> */}
    </>
  )
}

export default Signup