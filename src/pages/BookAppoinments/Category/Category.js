import React from 'react'
import { Link } from 'react-router-dom';
import Firstsection from './Firstsection';

function Category() {
  return (
    <div>
      <Link to="/ourconsultans" >ourconsultans</Link>
      <Firstsection/>
    </div>
  )
}

export default Category
