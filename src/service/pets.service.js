const Pets = require("../models/pets.js")

const createPet = async (name, breed, personality, medicalNeeds, ownerId, data) => {
  try {
    const newPet = await Pets.create({
      name, breed, personality, medicalNeeds, ownerId, data
    })
    return newPet
  } catch (error) {
    throw new Error(`Erro ao criar um novo animal de estimação - ${error}`)
  }
}

const listPets = async () => {
  try {
    const pets = await Pets.find()  
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
    const pet = await Pets.findByIdAndUpdate(id,  data , { new: true })
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
