const express = require("express")
const router = express.Router()

router.get("/list-all", (req, res) => res.send("List all users route"))
router.get("/:id", (req, res) => res.send("Get user by id"))
router.post("/", (req, res) => res.send("Create user route"))
router.patch("/:id", (req, res) => res.send("Update user route"))
router.delete("/:id", (req, res) => res.send("Delete user route"))

module.exports = router