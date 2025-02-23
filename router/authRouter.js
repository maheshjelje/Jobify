
import { Router } from 'express'
const router = Router();
import { logout, login, register } from '../contriller/authController.js';

import { validateRegister, ValidationLogin } from '../middleware/validationMiddleware.js';


router.post('/register', validateRegister, register);
router.post('/login', ValidationLogin, login);
router.get('/logout', logout)


export default router;