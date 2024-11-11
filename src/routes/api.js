const router = require('express').Router();
const authorController = require('../controllers/authorController');
const postController = require('../controllers/postController');

router.post('/authors', authorController.createAuthor);
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/authors/:authorId/posts', postController.getPostsAuthor);

module.exports = router;
