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
    console.log('req.params:', req.params.author_id);
    const authors_id  = req.params.author_id;

    if (!authors_id) {
        return res.status(400).json({ error: 'Autor ID invalido' });
    }

    try {
        const [posts] = await getPostsByAuthor2(authors_id);

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No hay posts para este autor.' });
        }

        res.json(posts);
    } catch (error) {
        next(error);
    }
};


module.exports = { createPost, getAllPosts, getPostsAuthor };
