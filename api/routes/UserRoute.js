const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();
const authMiddleware = require('../middleware/AuthMiddleware')

router.get("/users",
  authMiddleware.isAuthenticated,
  userController.getAllUsers
);

router.post("/users/",
  authMiddleware.isAuthenticated,
  userController.addUser
);

router.get("/users/:userId",
  authMiddleware.isAuthenticated,
  userController.getUserById
);

router.put("/users/:userId",
  authMiddleware.isAuthenticated,
  userController.updateUser
);

router.delete("/users/:userId",
  authMiddleware.isAuthenticated,
  userController.deleteUser
);

module.exports = router;