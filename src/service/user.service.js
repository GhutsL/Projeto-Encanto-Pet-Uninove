const User = require("../models/user.js")

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


module.exports = {
  createUser,
  listUsers
}