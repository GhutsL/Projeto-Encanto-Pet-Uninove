const express = require("express")
const router = express.Router({ mergeParams: true })
const userController = require("../controller/user.controller.js")

router.get("/list-all", userController.listUsers)
router.get("/:id", userController.userById)
router.post("/", userController.createUser)
router.patch("/:id", (req, res) => res.send("Update user route"))
router.delete("/:id", (req, res) => res.send("Delete user route"))

module.exports = router