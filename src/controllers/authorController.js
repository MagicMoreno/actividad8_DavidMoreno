// controllers/authorController.js
const { insertAuthor, getAuthorById } = require('../models/authorModel');

const createAuthor = async (req, res, next) => {
    try {
        // Insertar el nuevo cliente
        const [result] = await insertAuthor(req.body);
        // Recuperar los datos del nuevo cliente
        const author = await getAuthorById(result.authors_id);
        res.json(author);
    } catch (error) {
        next(error);
    }
};

module.exports = { createAuthor };


