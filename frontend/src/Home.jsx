import React from 'react'
import Header from './Header'
import './styles/home.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <p className='imgcl' >
            <img className='imghome' src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-company-activity-report_516790-1823.jpg" alt="" />
        </p>
    </div>
  )
}

export default Home