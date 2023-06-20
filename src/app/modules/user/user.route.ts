import express from 'express';
import { createUser, getUsers,getUserById, getAdminUsers } from './user.controller';
const router = express.Router();

/*
 "/" ---> simple routes
 "/admin" ---> simple routes but if i declare it after dynamic route it took this as a dynamic route's value. that's why we should call simple routes before dynamic routes
 "/:id" ---> dynamic routes
 
*/ 
router.get('/',getUsers);
router.get('/admins', getAdminUsers);
router.get('/:id',getUserById);
router.post('/create-user',createUser);


export default router;