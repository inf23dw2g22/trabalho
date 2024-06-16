const userService = require("../service/UserService");
const userController = {
    addUser(req, res) {
        userService.addUser(req.body)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error adding user' });
            });
    },

    deleteUser(req, res) {
        userService.deleteUser(req.userId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error deleting user' });
            });
    },

    getAllUsers(req, res) {
        userService.getAllUsers()
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error deleting user' });
            });
    },

    getUserById(req, res) {
        User.getUserById(req.params.userId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error getting user by id' });
            });
    },

    updateUser(req, res) {
        User.updateUser(req.body, req.params.userId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error updating user' });
            });
    }

}

module.exports = userController;

