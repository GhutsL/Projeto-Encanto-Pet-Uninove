const express = require("express")
const router = express.Router({ mergeParams: true })
const clientController = require("../controller/client.controller.js")

router.get("/list-all", clientController.listClients)
router.get("/:id", clientController.clientById)
router.post("/", clientController.createClient)
router.patch("/:id", clientController.updateClient)
router.delete("/:id", clientController.deleteClient)

module.exports = router