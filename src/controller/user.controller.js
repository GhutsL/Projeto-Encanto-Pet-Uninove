const mockData = require("../mockData.js") // TODO: Remover na ligação do banco
const { randomUUID } = require('crypto');  // TODO: Remover na ligação do banco

const listUsers = async (req, res) => {
  try {
    const allUsers = mockData.userTable // TODO: Alterar para retorno do mongoDB

    return res.status(200).json({ erro: false, message: "Listagem de Usuarios", data: allUsers})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const userById = async (req, res) => {
  try {
    const { id } = req.params
    if(!id){
      return res.status(400).json({ error: true, message: `Não endontrado ID de usuario na requisição`})
    }

    const user = mockData.userTable.filter( user => user.id == id)[0] // TODO: Alterar para retorno do mongoDB
    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: user})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    if(!name || !email || !password || !role){
      return res.status(400).json({ error: true, message: `Os parametros 'name', 'email', 'password' e 'role' na requisição`})
    }

    // TODO: Alterar para retorno do mongoDB >> 
    const newUser = {
      id: randomUUID(),
      name: name,
      email: email,
      password: password,
      role: role,
      isActive: true,
      createAt: 1791793870,
      updateAt: 1791793870,
    }
    mockData.userTable.push(newUser)
    // TODO: << Alterar para retorno do mongoDB 

    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: newUser})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const deleteUser = async (req, res) => {
  
  try {
    const { id } = req.params
    
    mockData.userTable = mockData.userTable.filter(user => user.id != id) // TODO: Remover na ligação do banco
    return res.status(200).json({ erro: false, message: `Usuário id: ${id} deletado`})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

module.exports = {
  listUsers,
  userById,
  createUser,
  deleteUser
}