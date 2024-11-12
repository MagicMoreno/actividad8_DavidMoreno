// models/postModel.js
const pool = require('../config/db');

// Crear un nuevo post
function insertPost({ title, description, category, authors_id }) {
    return pool.query(
        'insert into posts (title, description, category, authors_id) values (?, ?, ?, ?)',
        [title, description, category, authors_id]
    );
};

// Obtener todos los posts con datos del autor
function getAllPostsWithAuthors() {
    return pool.query(`
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
    FROM posts
    JOIN authors ON posts.authors_id = authors.id
  `)
}

// Obtener posts por autor
function getPostsByAuthor(authorId) {
    return pool.query(`
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
    FROM posts
    JOIN authors ON posts.authors_id = authors.id
    WHERE authors.id = ?`, [authorId]
    );
};

module.exports = { insertPost, getAllPostsWithAuthors, getPostsByAuthor };

