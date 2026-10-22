const Pets = require("../models/pets.model.js")

const createPet = async ( data) => {
  try {
    const newPet = await Pets.create(data)
    return newPet
  } catch (error) {
    throw new Error(`Erro ao criar um novo animal de estimação - ${error}`)
  }
}

const listPets = async () => {
  try {
    const pets = await Pets.find().populate("ownerId")  
    return pets
  } catch (error) {
    throw new Error(`Erro ao listar animais de estimação - ${error}`)
  }
}

const getPetById = async (id) => {
  try {
    const pet = await Pets.findById(id)
    return pet
  } catch (error) {
    throw new Error(`Erro ao buscar animal de estimação - ${error}`)
  }
}

const updatePet = async (id, data) => {
  try {
    const pet = await Pets.findByIdAndUpdate(id,  data , { strict: "throw", new: true })
    return pet
  } catch (error) {
    throw new Error(`Erro ao atualizar animal de estimação - ${error}`)
  }
}

const deletePet = async (id) => {
  try {
    const pet = await Pets.findByIdAndDelete(id)
    return pet
  } catch (error) {
    throw new Error(`Erro ao excluir animal de estimação - ${error}`)
  }
}

module.exports = {
  createPet,
  listPets,
  getPetById,
  updatePet,
  deletePet
}
