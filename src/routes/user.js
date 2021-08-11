const express = require ('express');
const userController = require ('../controllers/user.controller');
// const { signinValidator } = require ('../middlewares/validateUser');

const router = express.Router();

router.post('/insertUser', userController.registerUser)
router.get('/getUsers', userController.getUsers)

module.exports = router ;