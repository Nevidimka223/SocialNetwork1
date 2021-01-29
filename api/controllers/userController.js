const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

function clearUser (user) {
    const {password, ...userClearData} = user;
    return userClearData;
}

const registerUser = async (req, res) => {
    try { 
        const userInfo = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, saltRounds)
        }

        const user = await User.create(userInfo);
        res.status(200).json({
            message: 'register sucsessful',
            data: {
                user: clearUser(user),
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const getUserById = async (req, res) => {
    try { 
        const user = await User.findById(req.params.id);
        res.status(200).json({
            message: `User №${req.params.id} find successful`,
            data: {
                user: clearUser(user),
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

const updateUserInfo = async (req, res) => {
    try { 
        const user = await User.update(req.params.id, req.body)
        res.status(200).json({
            message: `change user info successful`,
            data: {
                user: clearUser(user),
            },
        })}
    catch (err) {
       res.status(404).json({
        status: 'fail',
        message: err,
      }); 
    }
};

module.exports = {registerUser, getUserById, updateUserInfo};
