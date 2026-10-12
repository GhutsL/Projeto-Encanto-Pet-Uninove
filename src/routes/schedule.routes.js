const express = require("express")
const router = express.Router()

router.get("/list-all", (req, res) => res.send("List all schedules route"))
router.get("/:id", (req, res) => res.send("Get schedule by id"))
router.post("/", (req, res) => res.send("Create schedule route"))
router.patch("/:id", (req, res) => res.send("Update schedule route"))
router.delete("/:id", (req, res) => res.send("Delete schedule route"))

module.exports = router