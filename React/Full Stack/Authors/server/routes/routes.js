const AuthorsController = require('../controller/controller');
module.exports = function(app){
    app.get('/api/authors/:id', AuthorsController.getAuthor);
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.post('/api/authors', AuthorsController.createAuthors);
    app.put('/api/authors/:id', AuthorsController.updateAuthor);
    app.delete('/api/authors/:id', AuthorsController.deleteAuthor);
    
}