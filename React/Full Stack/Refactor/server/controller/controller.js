const productController = require('../controller/controller');
module.exports = function(app){
    app.get('/api/products', productController.getAllProducts);
    app.post('/api/createProduct', productController.createProduct);
    app.get('/api/product/:id', productController.getProduct);
    app.put('/api/product/:id/edit', productController.updateProduct);
    app.delete('/api/product/:id', productController.deleteProduct);

}