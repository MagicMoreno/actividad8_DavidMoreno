// controllers/postController.js
const {insertPost, getAllPostsWithAuthors, getPostsByAuthor} = require('../models/postModel');

const createPost = async (req, res, next) => {
    try {
        // Insertar el nuevo cliente
        const [result] = await insertPost(req.body);
        // Recuperar los datos del nuevo cliente
        const author = await getPostsByAuthor(result.authors_id);
        res.json(author);
    } catch (error) {
        next(error);
    }
};

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await getAllPostsWithAuthors()
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getPostsAuthor = async (req, res, next) => {
    const { authors_id } = req.params;
    try {
        const result = await getPostsByAuthor(authors_id);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = { createPost, getAllPosts, getPostsAuthor };
