const db = require('../config/db');

function createAuthor({ name, email, image }) {
    return pool.query(
        'insert into clientes (name, email, image) values (?, ?, ?)',
        [name, email, image]
    );
};

async function getAuthorById(id) {
    const [authors] = await pool.query('SELECT * FROM authors WHERE id = ?', [id]);

    if (authors.length === 0) {
        return null;
    }

    return authors[0];
};

module.exports = { createAuthor, getAuthorById };


