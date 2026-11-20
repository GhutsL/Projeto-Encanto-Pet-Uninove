const express = require("express")
const router = express.Router()
const scheduleController = require("../controller/schedule.controller.js")

router.get("/list-all", scheduleController.listSchedule)
router.get("/:id", (req, res) => res.send("Get schedule by id"))
router.post("/", scheduleController.createSchedule)
router.patch("/:id", (req, res) => res.send("Update schedule route"))
router.delete("/:id", (req, res) => res.send("Delete schedule route"))

module.exports = router