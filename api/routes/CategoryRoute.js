const express = require("express");
const categoryController = require("../controller/CategoryController");
const router = express.Router();
const authMiddleware = require('../middleware/AuthMiddleware')

router.get("/users/:userId/calendar/:calendarId/categories",
  authMiddleware.isAuthenticated,
  categoryController.getAllCategories
);

router.post("/users/:userId/calendar/:calendarId/categories",
  authMiddleware.isAuthenticated,
  categoryController.addCategory
);

router.get("/users/:userId/calendars/:calendarId/categories/:categoryId",
  authMiddleware.isAuthenticated,
  categoryController.getCategoryById
);

router.put("/users/:userId/calendars/:calendarId/categories/:categoryId",
  authMiddleware.isAuthenticated,
  categoryController.updateCategory
);

router.delete("/users/:userId/calendars/:calendarId/categories/:categoryId",
  authMiddleware.isAuthenticated,
  categoryController.deleteCategory
);

module.exports = router;