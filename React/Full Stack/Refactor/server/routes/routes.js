const ProductController = require('../controller/controller');
module.exports = function(app){
    app.get('/api/product/:id', ProductController.getProduct);
    app.get('/api/product', ProductController.findAll);
    app.post('/api/product', ProductController.createProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/people/:id', ProductController.deleteProduct);
    
}