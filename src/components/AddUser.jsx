import {React,useState} from 'react'

import { addUser} from '../service/api';

import { FormControl,FormGroup,InputLabel,Input,Typography,styled,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Container=styled(FormGroup)`
      width:50%;
      margin:5% auto 0 auto;
      & > div{
        margin-top:20px;
      }
`
const defaultValue={
  Name:'',
  Email:'',
  Phone:'',
  Gender:''
}
function AddUser() {
   
  const [user,setUser]=useState(defaultValue);
  const { Name, Email, Phone, Gender } = user;
  let navigate = useNavigate();


  const onValueChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = async() => {
      await addUser(user);
      navigate('/all');
  }
  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} value={Name} name='Name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} value={Email} name='Email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e)=>onValueChange(e)} value={Phone} name='Phone'/>
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} value={Gender} name='Gender'/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser