import React from 'react';
import { Link } from 'react-router-dom';

function Booksession() {
  return (
    <div>
      Booksession-
      
      <Link to="/login" >login</Link>
      already loagin 
      <Link to="/payment" >payment</Link>
    </div>
  )
}

export default Booksession
