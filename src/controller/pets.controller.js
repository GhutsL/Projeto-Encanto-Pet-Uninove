const petService = require("../service/pets.service")


const createPet = async (req, res) => {
  const petData = req.body

  if(!petData){
    return res.status(400).json({ error: true, message: `Não foram encontrados dados para cadastro na requisição` })
  }

  try {
    const newPet = await petService.createPet(req.body)
    return res.status(201).json({ error: false, message: `Pet criado com sucesso`, pet: newPet })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao criar um novo pet - ${error}` })
  }
}

const listPets = async (req, res) => {
  try {
    const pets = await petService.listPets()
    return res.status(200).json({ error: false, message: `Pets listados com sucesso`, pets })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao listar os pets - ${error}` })
  }
}

const getPetById = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id)
    return res.status(200).json({ error: false, message: `Pet encontrado com sucesso`, pet })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao buscar o pet - ${error}` })
  }
}

const updatePet = async (req, res) => {
  const { id } = req.params
  if(!id){
    return res.status(400).json({ error: true, message: `Não foi encontrado ID de pet na requisição` })
  }

  const data = req.body
  if(!data){
    return res.status(400).json({ error: true, message: `Não foram encontrados dados para atualização na requisição` })
  }

  try {
    const pet = await petService.updatePet(id, data)
    return res.status(200).json({ error: false, message: `Pet atualizado com sucesso`, pet })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao atualizar o pet - ${error}` })
  }
}

const deletePet = async (req, res) => {
  const { id } = req.params
  if(!id){
    return res.status(400).json({ error: true, message: `Não foi encontrado ID de pet na requisição` })
  }

  try {
    const pet = await petService.deletePet(id)
    return res.status(200).json({ error: false, message: `Pet deletado com sucesso` })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao deletar o pet - ${error}` })
  }
}

module.exports = {
  createPet,
  listPets,
  getPetById,
  updatePet,
  deletePet
}