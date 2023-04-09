const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  deleteThoughts,
  addReaction,
  updateThoughts,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtsId').get(getSingleThoughts).put(updateThoughts).delete(deleteThoughts);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtsId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtsId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
