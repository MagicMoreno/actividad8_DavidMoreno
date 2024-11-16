const {insertPost, getAllPostsWithAuthors, getPostsByAuthor, getPostsByAuthor2} = require('../models/postModel');

const createPost = async (req, res, next) => {
    try {
        const result = await insertPost(req.body);
        const post = await getPostsByAuthor(result.insertId);
        res.status(201).json(post);
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
};

const getPostsAuthor = async (req, res, next) => {
    console.log('req.params:', req.params);
    const { authors_id } = req.params;
    console.log('Received authors_id:', authors_id);
    if (!authors_id) {
        return res.status(400).json({ error: 'Invalid author ID' });
    }
    try {
        const posts = await getPostsByAuthor2(authors_id);

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this author.' });
        }

        res.json(posts); // Retorna los posts en formato JSON
    } catch (error) {
        console.error('Error fetching posts by author:', error.message);
        next(error); // Pasar error al middleware de manejo de errores
    }
};

module.exports = { createPost, getAllPosts, getPostsAuthor };
