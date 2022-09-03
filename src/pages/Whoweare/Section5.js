import * as React from 'react';
import Box from '@mui/material/Box';
import './Section5.css';

export default function Section5() {
  return (
    <div className="section5">
    {/* <Box component="span" sx={{ p: 10, border: '1px dashed grey' }}> */}
    <span> <h3 className='section5head'>Have any question about us?</h3>
        <p className='section5para'>Don't hesitate to contact us</p>
        <button class="button1">CONTACT US </button>
    </span>
    {/* </Box> */}
    </div>
  );
}
