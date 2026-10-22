const User = require("../models/user.model.js")

/**
 * Cria um usuario no mongoDB
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 * @param {String} role 
 * @returns
 */

const createUser = async (name, email, password, role) => {
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

const listUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error(`Erro ao listar os usuários - ${error}`)
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id)
    return user
  } catch (error) {
    throw new Error(`Erro ao buscar o usuário - ${error}`)
  }
}

const updateUser = async (id, data) => {
  try {
    const user = await User.findByIdAndUpdate(id, data , { new: true })
    return user
  } catch (error) {
    throw new Error(`Erro ao atualizar o usuário - ${error}`)
  }
}

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id)
    return user
  } catch (error) {
    throw new Error(`Erro ao excluir o usuário - ${error}`)
  }
}   

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser
}




