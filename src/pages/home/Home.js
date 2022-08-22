import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div>Home</div>
    <Link to="/signup" >SignUp</Link>
    </>
  )
}

export default Home