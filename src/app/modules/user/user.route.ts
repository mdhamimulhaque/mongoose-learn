import express from 'express';
import { createUser, getUsers,getUserById } from './user.controller';
const router = express.Router();


router.get('/',getUsers);
router.post('/create-user',createUser);
router.get('/:id',getUserById);

export default router;