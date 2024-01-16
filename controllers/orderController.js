const getAllOrders = (req, res) => {
 res.send('getAllOrders')   
}
const getSingleOrder = (req, res) => {
    res.send('getSingleOrder')   
}
const getCurrentUserOrders = (req, res) => {
    res.send('getCurrentUserOrders')   
}
const createOrder = (req, res) => {
    res.send('createOrder')   
}
const updateOrder = (req, res) => {
    res.send('updateOrder')   
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}