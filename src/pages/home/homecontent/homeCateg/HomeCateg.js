import React from 'react'
import './HomeCateg.css'
import {Grid} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const HomeCateg = () => {
  return (
    <div className='prihomeCateg'>
      <h1 className='pricategHead'>Career Guidance Services</h1>
      <div className='pricategs'>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg1'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/college-students-sitting-desks-classroom-listening-teacher_74855-10516.jpg?w=996&t=st=1661856215~exp=1661856815~hmac=93528792d22e296876ae9e6fd38cbf475d2315763cd10b499d7f6328328e0df2"
          alt="person"
        />
        <CardContent className='pricategContent1'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead1'>Students</h2>
          <p  className='pricategPara1'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg2'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=996&t=st=1661856293~exp=1661856893~hmac=c70ef939b5f1dada0d9d4596059fe0119bb5b5d522ddcd62980d27c61aa91fcc"
          alt="person"
        />
        <CardContent className='pricategContent2'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead2'>Career Change</h2>
          <p  className='pricategPara2'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg3'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/volunteers-helping-disabled-friends-outdoor-walking_74855-7933.jpg?w=1060&t=st=1661856362~exp=1661856962~hmac=d76547f4dd96689dfaab984d6e972f07e3eb860830fbafd443f015d388b5bbfb"
          alt="person"
        />
        <CardContent className='pricategContent3'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead3'>Special Needs</h2>
          <p  className='pricategPara3'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg4'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg?w=1380&t=st=1661857036~exp=1661857636~hmac=81c56c3faa623de085acf4b062ac162a2dfe2af45c801655dd61455da91cad8a"
          alt="person"
        />
        <CardContent className='pricategContent4'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead4'>Career Break</h2>
          <p  className='pricategPara4'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg5'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?w=1060&t=st=1661856797~exp=1661857397~hmac=d8e5c735735d06a29eefb549149bafd6ab66e2179d87cb9064ed0b4532cfa3f6"
          alt="person"
        />
        <CardContent className='pricategContent5'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead5'>Freshers</h2>
          <p  className='pricategPara5'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Card className='pricateg6'>
      <CardActionArea>
        <CardMedia
          component="img" 
          image="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=1060&t=st=1661856882~exp=1661857482~hmac=3358319b8705c0d9ff64d7fa20cf9eacc79319ae2e3a321e254d898959f24f72"
          alt="person"
        />
        <CardContent className='pricategContent6'>
          
          <Typography variant="body2" > 
          <h2 className='pricategHead6'>Career Energize</h2>
          <p  className='pricategPara6'>
          As Consultants, we add immense value.  businesses, governments, organizations, municipalities, groups and individuals - and ultimately provide them with resources to help them make better choices. And with everyone making better choices, the world is a better place.
          </p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    
        </Grid>
      </Grid>
      </div>
     
    </div>
  )
}

export default HomeCateg
