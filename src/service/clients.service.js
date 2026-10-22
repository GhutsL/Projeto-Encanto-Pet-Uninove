const User = require("../models/client.js")

/**
 * Cria um cliente no mongoDB
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 * @param {String} role 
 * @returns
 */

const createClient = async (name, email, password, role) => {
  try {
    const newUser = await User.create({
      name, email, password, role
    })

    await newUser.save()
    return newUser
  } catch (error) {
    throw new Error(`Erro ao criar um novo usuário - ${error}`)
  }
}

const listClients = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error(`Erro ao listar os usuários - ${error}`)
  }
}

const getClientById = async (id) => {
  try {
    const user = await User.findById(id)
    return user
  } catch (error) {
    throw new Error(`Erro ao buscar o usuário - ${error}`)
  }
}

const updateClient = async (id, name, email, password, role) => {
  try {
    const user = await User.findByIdAndUpdate(id, { name, email, password, role }, { new: true })
    return user
  } catch (error) {
    throw new Error(`Erro ao atualizar o usuário - ${error}`)
  }
}

const deleteClient = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id)
    return user
  } catch (error) {
    throw new Error(`Erro ao excluir o usuário - ${error}`)
  }
}   

module.exports = {
  createClient,
  listClients,
  getClientById,
  updateClient,
  deleteClient
}




