import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './Payment.css'
import PaymentRout from './PaymentRout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Paymentpage() {
  return (
    <div className='paymentcard'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={12}>
          <Item id='paymerntgid'>

          </Item>
        </Grid>
        <Grid xs={12}>
          <Item >
            <p className='paymenttxt1'>Select Payment method</p>
          
            
          </Item>
        </Grid>

      </Grid>
    </Box>
    </div>
  );
}

