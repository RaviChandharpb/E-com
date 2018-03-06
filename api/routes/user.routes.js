'use strict';

const 	express = require("express"),
		router = express.Router(),
		UserController = require('../controllers/user.controller'),
		checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
