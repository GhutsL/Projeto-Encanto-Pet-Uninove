const mockData = require("../mockData.js") // TODO: Remover na ligação do banco
const userService = require("../service/user.service.js")


const listUsers = async (req, res) => {
  try {
    const allUsers = await userService.listUsers()

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

    const user = await userService.getUserById(id)
    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: user})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    if(!name || !email || !password || !role){
      return res.status(400).json({ error: true, message: `Os parametros 'name', 'email', 'password' e 'role' não foram encontrados na requisição`})
    }

    const newUser = await userService.updateUser(name, email, password, role)

    return res.status(200).json({ erro: false, message: "Dados do Usuario", data: newUser})
  } catch (error) {
    return res.status(500).json({ error: true, message: `Falha interna do servidor - ${error.message}`})
  }
}

const updateUser = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await userService.deleteUser(id)
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