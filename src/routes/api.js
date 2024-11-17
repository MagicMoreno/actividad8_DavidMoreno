const router = require('express').Router();
const authorController = require('../controllers/authorController');
const postController = require('../controllers/postController');

router.post('/authors', authorController.createAuthor);
router.get('/authors', authorController.getAllAuthors);
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/authors/:author_id/posts', postController.getPostsAuthor);

module.exports = router;
