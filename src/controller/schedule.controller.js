const scheduleService = require('../service/agend.service.js')
const Client = require('../models/client.model.js')
const Pet = require('../models/pets.model.js')
const Service = require('../models/servico.model.js')

const createSchedule = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).json({ error: true, message: `Não foram encontrados dados para cadastro na requisição` })
    }

    const client = await Client.findOne({ gId: "123" })  // TODO: Criar cliente caso não ache
    const pet = await Pet.findOne({ $and: [{ownerId: client.id}, {name: data['pet-nome']}]  }) // TODO: Criar pet caso não ache
    let services = []

    
    for( const serviceName of data.servicos){
      const servico = await Service.findOne({ name: serviceName})
      services.push(servico)
      console.log("Service find", servico)
    }
    
    // console.log("Cliente", client)
    // console.log("Pet", pet)
    // console.log("Servicos", services)

    const newScheduleData = {
      clientId: client.id,
      date: new Date(`${data.data}T${data.horario}:00`),
      petId: pet.id,
      servicos: services.map( service => service.id)
    }

    console.log("Agendamento", newScheduleData)

    const newSchedule = await scheduleService.createAgend(newScheduleData)

    return res.status(201).json({ error: false, message: `Agendamento criado com sucesso`, schedule: newSchedule })
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error.message}` })
  }
}

const listSchedule = async (req, res) => {
  try {
    const allSchedule = await scheduleService.listAgends()
    return res.status(200).json({ error: false, message: `Agendamento listados com sucesso`, clients: allSchedule })
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error.message}` })
  }
}

const clientById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ error: true, message: `Não endontrado ID de cliente na requisição` })
    }

    const client = await scheduleService.getClientById(id)
    if (!client) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    return res.status(200).json({ error: false, message: `Cliente encontrado com sucesso`, client })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao buscar cliente: ${error.message}` })
  }
}

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ error: true, message: `Não endontrado ID de cliente na requisição` })
    }

    const client = await scheduleService.deleteClient(id)
    if (!client) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    return res.status(200).json({ error: false, message: `Cliente deletado com sucesso` })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao deletar cliente: ${error.message}` })
  }
}

const updateClient = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const client = await scheduleService.updateClient(id, updateData)
    if (!client) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    return res.status(200).json({ error: false, message: `Cliente atualizado com sucesso`, client })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao atualizar cliente: ${error.message}` })
  }
}

module.exports = {
  createSchedule,
  listSchedule,
  clientById,
  deleteClient,
  updateClient
}