const express = require("express");
const { login, createUser } = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(createUser);

module.exports = router;