const { Authors } = require('../models/model');
module.exports.findAllAuthors = (req, res) => {
    Authors.find()
    .then(authors => res.json(authors))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createAuthors = (request, response) => {
    const { name } = request.body;
    Authors.create({name})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

module.exports.getAuthor = (request, response) => {
    Authors.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.updateAuthor = (request, response) => {
    Authors.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthors => response.json(updatedAuthors))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Authors.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}