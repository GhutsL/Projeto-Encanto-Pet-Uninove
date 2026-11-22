const Agend = require("../models/agend.model.js")

const createAgend = async (data) => {
    try {
        const newAgend = await Agend.create(data);
        await newAgend.save();
        return newAgend;
    } catch (error) {
        throw new Error(`Erro ao criar um novo agendamento - ${error}`);
    }
};

const listAgends = async () => {
    try {
        return await Agend.find() 
        .populate("clientId")
        .populate("servicos")
        .populate("petId");
    } catch (error) {
        throw new Error(`Erro ao listar agendamentos - ${error}`);
    }
};

const getAgendById = async (id) => {
    try {
        return await Agend.findById(id);
    } catch (error) {
        throw new Error(`Erro ao buscar agendamento por ID - ${error}`);
    }
};

const updateAgend = async (id, data) => {
    try {
        return await Agend.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error(`Erro ao atualizar agendamento - ${error}`);
    }
};

const deleteAgend = async (id) => {
    try {
        return await Agend.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`Erro ao excluir agendamento - ${error}`);
    }
};

module.exports = {
  createAgend,
  listAgends,
  getAgendById,
  updateAgend,
  deleteAgend
}