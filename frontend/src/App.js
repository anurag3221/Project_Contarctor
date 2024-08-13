import React from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import Complaint from './Complaint';
import Complaintinput from './Complaintinput';
import Home from './Home';
import Forgot from './Forgot';
import Thankyou from './Thankyou';
const App = () => {
  return (
   <Router>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path='/login' element={<Signin/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/complaint' element={<Complaint/>}/>
   <Route path='/cominp' element={<Complaintinput/>}/>
   <Route path='/forgot' element={<Forgot/>}/>
   <Route path='/thank' element={<Thankyou/>}/>
   </Routes>
   </Router>
  )
}

export default App;