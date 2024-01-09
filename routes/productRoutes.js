const {createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadProduct} = require('../controllers/productController')
const {authenticateUser,
    authorizePermissions} = require('../middleware/authentication')
const express = require('express')
const router = express.Router()

router.route('/')
    .get(getAllProducts)
    .post(authenticateUser, authorizePermissions('admin') ,createProduct)
    
router.route('/uploadImage').post(authenticateUser, authorizePermissions('admin'),uploadProduct)

router.route('/:id')
    .get(getSingleProduct)
    .patch(authenticateUser, authorizePermissions('admin'), updateProduct)
    .delete(authenticateUser, authorizePermissions('admin'), deleteProduct)

module.exports = router