
const pool = require('../config/db');

async function insertPost({ title, description, category, authors_id }) {
    const [result] = await pool.query(
        'insert into posts (title, description, category, authors_id) values (?, ?, ?, ?)',
        [title, description, category, authors_id]
    );
    return result;
};

async function getPostsByAuthor(postId) {
    const [result] = await pool.query(`
    SELECT * FROM posts
    JOIN authors ON posts.authors_id = authors.id
    WHERE posts.id = ?`, [postId]
    );
    return result;
};

async function getPostsByAuthor2(authors_id){
    return pool.query(`SELECT * FROM posts where authors_id = ?`, [authors_id]);
};



function getAllPostsByAuthors() {
    return pool.query(`
    SELECT * FROM posts
    JOIN authors ON posts.authors_id = authors.id
  `)
};

module.exports = { insertPost, getAllPostsByAuthors, getPostsByAuthor, getPostsByAuthor2 };

