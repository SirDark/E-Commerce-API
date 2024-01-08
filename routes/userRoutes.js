const express = require('express')
const router = express.Router()

const {authenticateUser, authorizePermissions} = require('../middleware/authentication')
const { getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword } = require('../controllers/userController')

router.route('/').get(authenticateUser, authorizePermissions('admin'), getAllUsers)
router.route('/updateUser').patch(updateUser)
router.route('/showMe').get(authenticateUser, showCurrentUser)
router.route('/updatePassword').patch(authenticateUser, updateUserPassword)
router.route('/:id').get(authenticateUser, authorizePermissions('admin'), getSingleUser)


module.exports = router