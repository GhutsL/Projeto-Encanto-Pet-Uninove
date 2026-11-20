const Service = require('../models/servico.model');

const createService = async (data) => {
    try {
        const newService = await Service.create(data);
        await newService.save();
        return newService;
    } catch (error) {
        throw new Error(`Erro ao criar um novo serviço - ${error}`);
    }
};

const listServices = async () => {
    try {
        return await Service.find();
    } catch (error) {
        throw new Error(`Erro ao listar serviços - ${error}`);
    }
};

const getServiceById = async (id) => {
    try {
        return await Service.findById(id);
    } catch (error) {
        throw new Error(`Erro ao buscar serviço por ID - ${error}`);
    }
};

const updateService = async (id, data) => {
    try {
        return await Service.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error(`Erro ao atualizar serviço - ${error}`);
    }
};

const deleteService = async (id) => {
    try {
        return await Service.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`Erro ao excluir serviço - ${error}`);
    }
};

module.exports = {
  createService,
  listServices,
  getServiceById,
  updateService,
  deleteService
}
