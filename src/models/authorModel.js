const pool = require('../config/db');

async function insertAuthor({ name, email, image }) {
    const [result] = await pool.query(
        'insert into authors (name, email, image) values (?, ?, ?)',
        [name, email, image]
    );
    return result;
};

async function getAuthorById(id) {
    const [authors] = await pool.query('SELECT * FROM authors WHERE id = ?', [id]);
    if (authors.length === 0) {
        return null;
    }
    return authors[0];
};

function getAll() {
    return pool.query(`
    SELECT * FROM authors
  `)
}

module.exports = { insertAuthor, getAuthorById, getAll };


