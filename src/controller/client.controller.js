const mockdata = require('../mockData')

const createClient = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).json({ error: true, message: `Não foram encontrados dados para cadastro na requisição` })
    }

    // TODO: Alterar para retorno do mongoDB >>
    const newClient = {
      id: "uuid.v4()",
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
      pets: [],
      street: data.street,
      number: data.number,
      complement: data.complement,
      state: data.state,
      city: data.city,
      uf: data.uf,
      cep: data.cep,
      isActive: true,
      createAt: 1791793870,
      updateAt: 1791793870
    }
    mockdata.clientTable.push(newClient)
    // TODO: Alterar para retorno do mongoDB <<

    return res.status(201).json({ error: false, message: `Cliente criado com sucesso`, client: newClient })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao criar cliente: ${error.message}` })
  }
}

const listClients = async (req, res) => {
  try {
    const allClients = mockdata.clientTable // TODO: Alterar para retorno do mongoDB
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

    const client = mockdata.clientTable.find((c) => c.id === id) // TODO: Alterar para retorno do mongoDB
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

    const clientIndex = mockdata.clientTable.findIndex((c) => c.id === id) // TODO: Alterar para retorno do mongoDB
    if (clientIndex === -1) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    mockdata.clientTable = mockdata.clientTable.filter((c) => c.id !== id) // TODO: Alterar para operação no mongoDB
    return res.status(200).json({ error: false, message: `Cliente deletado com sucesso` })
  } catch (error) {
    return res.status(500).json({ error: true, message: `Erro ao deletar cliente: ${error.message}` })
  }
}

const updateClient = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const clientIndex = mockdata.clientTable.findIndex((c) => c.id === id) // TODO: Alterar para retorno do mongoDB
    if (clientIndex === -1) {
      return res.status(404).json({ error: true, message: `Cliente não encontrado` })
    }

    mockdata.clientTable[clientIndex] = { ...mockdata.clientTable[clientIndex], ...updateData, updateAt: Date.now() } // TODO: Alterar para operação no mongoDB
    return res.status(200).json({ error: false, message: `Cliente atualizado com sucesso`, client: mockdata.clientTable[clientIndex] })
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