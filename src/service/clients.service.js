const Client = require("../models/client.model.js")

/**
 * Cria um cliente no mongoDB
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 * @param {String} role 
 * @returns
 */

const createClient = async (data) => {
  try {
    const newClient = await Client.create(data)

    await newClient.save()
    return newClient
  } catch (error) {
    throw new Error(`Erro ao criar um novo cliente - ${error}`)
  }
}

const listClients = async () => {
  try {
    const Clients = await Client.find()
    return Clients
  } catch (error) {
    throw new Error(`Erro ao listar os clientes - ${error}`)
  }
}

const getClientById = async (id) => {
  try {
    const Client = await Client.findById(id)
    return Client
  } catch (error) {
    throw new Error(`Erro ao buscar o cliente - ${error}`)
  }
}

const updateClient = async (id, name, email, password, role) => {
  try {
    const Client = await Client.findByIdAndUpdate(id, { name, email, password, role }, { new: true })
    return Client
  } catch (error) {
    throw new Error(`Erro ao atualizar o cliente - ${error}`)
  }
}

const deleteClient = async (id) => {
  try {
    const Client = await Client.findByIdAndDelete(id)
    return Client
  } catch (error) {
    throw new Error(`Erro ao excluir o cliente - ${error}`)
  }
}   

module.exports = {
  createClient,
  listClients,
  getClientById,
  updateClient,
  deleteClient
}




