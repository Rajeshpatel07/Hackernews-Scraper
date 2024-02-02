const express = require('express');
const router =  express.Router();

const {home ,register,login,dashboard} = require('../controllers/controller')


// for the home route

router.get('/',home)


// for register page

router.get('/register',register);

// for login route

router.get('/login',login)


router.get('/dashboard',dashboard);

module.exports = router
