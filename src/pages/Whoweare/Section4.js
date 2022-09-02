import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Section4.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Section4() {
  return (
    <div className='gridsection'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, sm: 2, lg: 2}} columns={{ xs: 12, sm: 8, md: 12 }}>
        
          <Grid item lg={2} xs={12} sm={2} md={4}>
            <Item>
              <h3 className='gridhead1'>OUR HISTORY</h3>
              <p className='gridpara1'>To be client-centric, technology-driven, adaptive,
               innovative and creative in our approach for attaining excellence and promoting 
               profitability for our clients and ourselves by delivering best IT solutions and
                its successful implementation</p>
            </Item>
          </Grid>
          <Grid item lg={2} xs={12} sm={2} md={4}>
            <Item>
              <h3 className='gridhead2'>OUR MISSION</h3>
              <p className='gridpara2'>To be admired as an organization with integrity ,
               ethical in its conduct, professional in its approach, complete dedication and providing 
               cost effective, surpassing their expectations,enhancing their revenues at the same time</p>
            </Item>
          </Grid>
          <Grid item lg={2} xs={12} sm={2} md={4}>
            <Item>
              <h3 className='gridhead3'>OUR VISION</h3>
              <p className='gridpara3'>To be client-centric, technology-driven, adaptive, innovative and 
              creative in our approach for attaining excellence and promoting profitability for our clients 
              and ourselves by delivering best IT solutions and its successful implementation</p>
            </Item>
          </Grid>
      
      </Grid>
    </Box>
    </div>
  );
}
