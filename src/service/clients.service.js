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
    const clients = await Client.find()
    return clients
  } catch (error) {
    throw new Error(`Erro ao listar os clientes - ${error}`)
  }
}

const getClientById = async (id) => {
  try {
    const client = await Client.findById(id)
    return client
  } catch (error) {
    throw new Error(`Erro ao buscar o cliente - ${error}`)
  }
}

const updateClient = async (id, data) => {
  try {
    const client = await Client.findByIdAndUpdate(id, data, { strict: "throw" })
    return client
  } catch (error) {
    throw new Error(`Erro ao atualizar o cliente - ${error}`)
  }
}

const deleteClient = async (id) => {
  try {
    const client = await Client.findByIdAndDelete(id)
    return client
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




