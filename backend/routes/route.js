import express from 'express';
import {addUser,getUser,editUser,getUserById,deleteUser} from '../controller/user-controller.js';
const router=express.Router();

router.post('/add',addUser);
router.get('/all',getUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
export default router;
