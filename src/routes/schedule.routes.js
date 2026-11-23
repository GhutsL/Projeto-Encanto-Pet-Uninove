const express = require("express")
const router = express.Router()
const scheduleController = require("../controller/schedule.controller.js")

router.get("/list-all", scheduleController.listSchedule)
router.get("/list-day/:day", scheduleController.listScheduleByDay)
router.get("/:id", scheduleController.scheduleById)
router.post("/", scheduleController.createSchedule)
router.patch("/:id", (req, res) => res.send("Update schedule route"))
router.delete("/:id", scheduleController.deleteSchedule)

module.exports = router