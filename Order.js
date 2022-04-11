
const mongoose = require('mongoose');

const Order = new mongoose.Schema({

    productId: {type: Number, required: true},
    quantity:  {type: Number, required: true}
})

// export default mongoose.model('Order', Order)

module.exports = {
    Order}