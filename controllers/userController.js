const { User, Thoughts } = require('../models');

module.exports = {
  // Get all userDatas
  getUsers(req, res) {
    User.find()
      .then((userDatas) => res.json(userDatas))
      .catch((err) => res.status(500).json(err));
  },
  // Get a userData
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userDataId })
      .select('-__v')
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No userData with that ID' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a userData
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a userData
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userDataId })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No userData with that ID' })
          : Thoughts.deleteMany({ _id: { $in: userData.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a userData
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userDataId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No userData with this id!' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
