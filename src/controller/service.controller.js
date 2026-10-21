const mockData = require("../mockData.js") // TODO: Remover na ligação do banco
const { randomUUID } = require('crypto');  // TODO: Remover na ligação do banco

const listServices = async (req, res) => {
  try {
    const allServices = mockData.servicesTable // TODO: Alterar para retorno do mongoDB

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

    const service = mockData.servicesTable.filter( service => service.id == id)[0] // TODO: Alterar para retorno do mongoDB
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

    // TODO: Alterar para retorno do mongoDB >> 
    const newService = {
      id: randomUUID(),
      name: name,
      value: value,
      duration: duration,
      isActive: true,
      createAt: 1791793870,
      updateAt: 1791793870,
    }
    mockData.servicesTable.push(newService)
    // TODO: << Alterar para retorno do mongoDB 

    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: newService})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const deleteService = async (req, res) => {
  
  try {
    const { id } = req.params
    
    mockData.servicesTable = mockData.servicesTable.filter(service => service.id != id) // TODO: Remover na ligação do banco
    return res.status(200).json({ erro: false, message: `Serviço id: ${id} deletado`})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

module.exports = {
  createService,
  listServices,
  deleteService,
  serviceById
}