
import { Router } from 'express'
import { getApplicationStats, getCurrentUser, updateUser } from '../contriller/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermission, checkForTestUser } from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';


const router = Router();


router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats',
    [authorizePermission('admin'),
        getApplicationStats]);


router.patch('/update-user',
    checkForTestUser, upload.single('avatar'),
    validateUpdateUserInput, updateUser)


export default router;