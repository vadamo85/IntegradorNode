const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/auth/login', authControllers.authToLogin);
router.post('/auth/login', authControllers.authLogin);
router.get('/auth/signup', authControllers.authRegister);
router.post('/auth/signup', authControllers.authRegisterOK);
router.get('/auth/logout', authControllers.authLogout);

module.exports = router;