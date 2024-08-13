import React from 'react'
import { Link } from "react-router-dom";
import "./styles/complaint.css"
import Header from './Header';

const Complaint = () => {
  return (
    <>
    <Header/>
    <div className='body'>
    <div className="  card carddiv">
  <img src="https://t4.ftcdn.net/jpg/00/32/52/57/240_F_32525768_XZ1Oc0puUH174LFSKjAE8uQH3n2fVUnt.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Project Name</h5>
    <p className="btn btn-primary">Subscribe</p> <><br /></>
    <Link to='/cominp'>
    <a href="#" className="btn btn-primary">View Employee</a>
    </Link>
  </div>
</div>
</div>
<footer/>
</>
  )
}

export default Complaint