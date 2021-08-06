const { Product } = require('../models/model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello"
    });
}
module.exports.findAllProduct = (req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.json({ message: " Error dedected ", error: err }));
};
module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}