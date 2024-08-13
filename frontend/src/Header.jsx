// import React from 'react'
// import "./styles/header.css"
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand " href="#">Happy To Help</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link to='/'>
//           <a className="nav-link active underline" aria-current="page" href="#">Home</a> </Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/about'>
//           <a className="nav-link active underline" aria-current="page" href="#">About</a></Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/login'> 
//           <a className="nav-link active underline" aria-current="page" href="#">Sign In</a>
//           </Link>
//         </li>
//       </ul>
     
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Header

// components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Digest Report</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item noh">
              <Link to="/" className="nav-link">Home</Link>

            </li>
            <li className="nav-item noh">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item noh">
              <Link to="/login" className="nav-link">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
