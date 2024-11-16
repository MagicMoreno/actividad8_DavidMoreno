const { insertAuthor, getAuthorById, getAll } = require('../models/authorModel');

const createAuthor = async (req, res, next) => {
    try {
        const result = await insertAuthor(req.body);
        const author = await getAuthorById(result.insertId);
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
};

const getAllAuthors = async (req, res, next) => {
    try {
        const [authors] = await getAll();
        res.json(authors);
    } catch (error) {
        next(error);
    }
};


module.exports = { createAuthor, getAllAuthors };


