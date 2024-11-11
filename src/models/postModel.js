// models/postModel.js
const db = require('../config/db');

// Crear un nuevo post
function createPost({ title, description, category, author_id }) {
    return pool.query(
        'insert into clientes (title, description, category, author_id) values (?, ?, ?, ?)',
        [title, description, category, author_id]
    );
};

// Obtener todos los posts con datos del autor
function getAllPostsWithAuthors() {
    return pool.query(`
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
    FROM posts
    JOIN authors ON posts.author_id = authors.id
  `)
}

// Obtener posts por autor
function getPostsByAuthor(authorId) {
    return pool.query(`
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    WHERE authors.id = ?`, [authorId]
    );
};

module.exports = { createPost, getAllPostsWithAuthors, getPostsByAuthor };

