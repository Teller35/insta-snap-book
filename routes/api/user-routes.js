const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");
// route to get all users and create a user
router.route("/").get(getAllUser).post(createUser);
// route to add a friend to a user
router.route("/:userId").post(addFriend);
// route to delete friend from user
router.route("/:userId/:friendId").delete(removeFriend);
// route to get a user, update a user, or delete a user from a single id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
