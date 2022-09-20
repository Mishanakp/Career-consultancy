import React from 'react'
import './Banner.css';

function banner() {
  return (
    <div>
      <img className='bannerimg' src="https://img.freepik.com/free-photo/group-people-holding-blank-white-picture-frame-with-wooden-boarder_23-2148192453.jpg?w=1060&t=st=1663609140~exp=1663609740~hmac=9f1491ca73167d1bd7aa154bd5d7e179228f7751f0e8b59760ea2fa91b41d72f"></img>
      <div className='bannerdiv'>
            <h1 classname='bannercontent'> “Choose a job you love, and you will never have to work a day in your life."</h1>
      </div>
    </div>
  )
}

export default banner