const router = require('express').Router();
const {registerUser, getUserById, updateUserInfo} = require('./../controllers/userController');

router.get('/users/:id', getUserById);

router.post('/users', registerUser); //Sing up

router.put('/users/:id', updateUserInfo);

module.exports = router;
