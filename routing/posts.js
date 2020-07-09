const express = require('express');
const router = express.Router();
const post_model = require('../models/post');

// Getting all posts
router.get('/', async (req, res) => {
  try {
    const all_posts = await post_model.find();
    res.json(all_posts);
  } catch(err) {
    res.json({message: err});
  }
});

// Post
router.post('/', async (req, res) => {
  const post = new post_model({
    title: req.body.title,
    content_text: req.body.content_text
  });
  try {
    const post_in_db = await post.save()
    res.json(post_in_db);
  } catch(err) {
    res.json({message: err});
  }
});

// Get one (specific) post by id
router.get('/:postId', async (req, res) => {
  try {
    const post = await post_model.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }
});

// Delete one (specific) post by id
router.delete('/:postId', async (req, res) => {
  try {
    const remove_post = await post_model.remove({_id: req.params.postId });
    res.json(remove_post);
  } catch(err) {
    res.json({message: err});
  }
});

// Patch (update) a post
router.patch('/:postId', async (req, res) => {
  try {
    const update_post = await post_model.updateOne({_id: req.params.postId }, {
      $set: {
        title: req.body.title
      }
    });
    res.json(update_post);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;