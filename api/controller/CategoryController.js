var categoryService = require('../service/CategoryService');

const categoryController = {

    addCategory(req, res) {
        categoryService.addcategory(req.body, req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error adding category' });
            });
    },

    deleteCategory(req, res) {
        categoryService.deleteCategory(req.params.userId, req.params.calendarId, req.params.categoryId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error deleting category' });
            });
    },

    getAllCategories(req, res) {
        categoryService.getAllCategories(req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error getting all categories' });
            });
    },

    getCategoryById(req, res) {
        categoryService.getCategoryById(req.params.userId, req.params.calendarId, req.params.categoryId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error getting category by id' });
            });
    },

    updateCategory(req, res) {
        categoryService.updateCategory(req.body, req.params.userId, req.params.calendarId, req.params.categoryId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error updating category' });
            });
    }
}

module.exports = categoryController;