import axios from 'axios';

const url='http://localhost:7000';

export const addUser=async (data)=>{
   try{
      return await axios.post(`${url}/add`,data);
   }
   catch(err){
      console.log(data);
      console.log(`Error while calling User Api`,err);
   }
}

export const getUser = async (id) => {
   try{
      id = id || '';
   return await axios.get(`${url}/${id}`);
   }
   catch(err)
   {
      console.log(`Error while calling User Api`,err)
   }
}

export const deleteUser = async (id) => {
   try{
   return await axios.delete(`${url}/${id}`);
   }
   catch(err)
   {
      console.log(`Error while calling User Api`,err)
   }
}

export const editUser = async (id, user) => {
   try{
   return await axios.put(`${url}/${id}`, user)
   }
   catch(err)
   {
      console.log(`Error while calling User Api`,err)
   }
}

