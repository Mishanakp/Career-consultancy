import  React from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Header() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
<Link to="/" >Career Consultancy</Link> &nbsp;&nbsp;&nbsp;
      
       <Link to="/whoweare" >Who We are</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/ourconsultans" >Our Consultants</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/bookappoinments" >Book Appoinments</Link>&nbsp;&nbsp;&nbsp;
      
      
      <Link to="/contact" >Contact Us</Link> &nbsp;&nbsp;&nbsp;




    

                    

                    

                   
                    
    </>
  )
}

export default Header