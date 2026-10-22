const express = require("express")
const router = express.Router({ mergeParams: true })
const petController = require("../controller/pets.controller")

router.get("/list-all", petController.listPets)
router.get("/:id", petController.getPetById)
router.post("/", petController.createPet)
router.patch("/:id", petController.updatePet)
router.delete("/:id", petController.deletePet)

module.exports = router