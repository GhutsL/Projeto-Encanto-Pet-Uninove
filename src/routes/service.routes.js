const express = require("express")
const router = express.Router()

router.get("/list-all", (req, res) => res.send("List all services route"))
router.get("/:id", (req, res) => res.send("Get service by id"))
router.post("/", (req, res) => res.send("Create service route"))
router.patch("/:id", (req, res) => res.send("Update service route"))
router.delete("/:id", (req, res) => res.send("Delete service route"))

module.exports = router