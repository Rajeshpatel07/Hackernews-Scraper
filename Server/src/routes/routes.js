const express = require('express');
const router =  express.Router();
const jwtverify=require('../middlewares/jwtVerify')
const {home ,register,login,dashboard} = require('../controllers/controller')

router.route('/').get(home)
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/dashboard').get(jwtverify,dashboard)

module.exports = router
