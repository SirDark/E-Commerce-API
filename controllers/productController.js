const createProduct = async (req,res) => {
    res.send('createProduct')
}
const getAllProducts = async (req,res) => {
    res.send('getAllProducts')
}
const getSingleProduct = async (req,res) => {
    res.send('getSingleProduct')
}
const updateProduct = async (req,res) => {
    res.send('updateProduct')
}
const deleteProduct = async (req,res) => {
    res.send('deleteProduct')
}
const uploadProduct = async (req,res) => {
    res.send('uploadProduct')
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadProduct
}