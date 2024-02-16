const express = require('express');
const router = express.Router();
const safeUser = require('../middlewares/safeUser')
const { home, register, login, dashboard, logout } = require('../controllers/controller')

router.route('/').get(home)
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/dashboard').get(safeUser, dashboard)
router.route('/logout').get(logout)

module.exports = router
