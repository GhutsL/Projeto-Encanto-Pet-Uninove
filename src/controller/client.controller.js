const mockdata = require('../mockData')
const clientService = require('../service/clients.service')

const createClient = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).json({ error: true, message: `Não foram encontrados dados para cadastro na requisição` })
    }

    const newClient = await clientService.createClient(data)

    return res.status(201).json({ error: false, message: `Cliente criado com sucesso`, client: newClient })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao criar cliente: ${error.message}` })
  }
}

const listClients = async (req, res) => {
  try {
    const allClients = await clientService.listClients()
    return res.status(200).json({ error: false, message: `Clientes listados com sucesso`, clients: allClients })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao listar clientes: ${error.message}` })
  }
}

const clientById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ error: true, message: `Não endontrado ID de cliente na requisição` })
    }

    const client = await clientService.getClientById(id)
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

    const client = await clientService.deleteClient(id)
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

    const client = await clientService.updateClient(id, updateData)
    if (!client) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    return res.status(200).json({ error: false, message: `Cliente atualizado com sucesso`, client })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao atualizar cliente: ${error.message}` })
  }
}

module.exports = {
  createClient,
  listClients,
  clientById,
  deleteClient,
  updateClient
}