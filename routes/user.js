'use strict';

import express from 'express';
import User from '../controller/user/user';
const router = express.Router();

router.get('/list', User.getUserList);
router.post('/update',User.updateUserInfo);
router.post('/addUser',User.addUser);
router.get('/userDetail',User.getUserDetailInfo);
export default router;