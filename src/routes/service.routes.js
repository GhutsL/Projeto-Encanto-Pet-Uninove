const express = require("express")
const router = express.Router()
const serviceContoller = require("../controller/service.controller")

router.get("/list-all", serviceContoller.listServices)
router.get("/:id", serviceContoller.serviceById)
router.post("/", serviceContoller.createService)
router.post("/:id", serviceContoller.updateService)
router.patch("/:id", (req, res) => res.send("Update service route"))
router.delete("/:id", serviceContoller.deleteService)

module.exports = router