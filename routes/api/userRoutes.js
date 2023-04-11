const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriends
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

;

// /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').post(addFriends).delete(removeFriends);


module.exports = router;
