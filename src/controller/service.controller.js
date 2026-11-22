const servicoService = require("../service/servico.service.js")

const listServices = async (req, res) => {
  try {
    const allServices = await servicoService.listServices()

    return res.status(200).json({ erro: false, message: "Listagem de Services", data: allServices})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const serviceById = async (req, res) => {
  try {
    const { id } = req.params
    if(!id){
      return res.status(400).json({ error: true, message: `Não endontrado ID de serviço na requisição`})
    }

    const service = await servicoService.getServiceById(id)
    return res.status(200).json({ erro: false, message: "Dados do Serviço", data: service})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const createService = async (req, res) => {
  try {
    const { name, value, duration } = req.body
    if(!name || !value || !duration ){
      return res.status(400).json({ error: true, message: `Os parametros 'name', 'value', e 'duration' na requisição`})
    }

    const newService = await servicoService.createService(req.body)
    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: newService})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const updateService = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    if(!id || !body){
      return res.status(400).json({ error: true, message: `Não encontrados parametros na requisição`})
    }

    const updateService = await servicoService.updateService(id, body)
    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: updateService})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const deleteService = async (req, res) => {
  try {
    const { id } = req.params
    await servicoService.deleteService(id)
    return res.status(200).json({ erro: false, message: `Serviço id: ${id} deletado`})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

module.exports = {
  createService,
  listServices,
  deleteService,
  serviceById,
  updateService
}