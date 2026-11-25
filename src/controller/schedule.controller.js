const scheduleService = require("../service/agend.service.js");
const Client = require("../models/client.model.js");
const Pet = require("../models/pets.model.js");
const Service = require("../models/servico.model.js");
const Agend = require("../models/agend.model.js");

const createSchedule = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        error: true,
        message: `Não foram encontrados dados para cadastro na requisição`,
      });
    }

    let client = await Client.findOne({ gId: "123" }); // TODO: Criar cliente caso não ache
    if(!client){

    }

    let pet = await Pet.findOne({
      $and: [{ ownerId: client.id }, { name: data["pet-nome"] }],
    }); // TODO: Criar pet caso não ache
    let services = [];
    if (!pet) {
      pet = await Pet.create({
        name: data["pet-nome"],
        breed: data["pet-raca"],
        ownerId: client.id,
        personality: data["pet-temperamento"],
        medicalNeeds: data["observacoes"],
      });
    }

    for (const serviceName of data.servicos) {
      const servico = await Service.findOne({ name: serviceName });
      services.push(servico);
      // console.log("Service find", servico);
    }

    // console.log("Cliente", client)
    // console.log("Pet", pet)
    // console.log("Servicos", services)

    const newScheduleData = {
      clientId: client.id,
      date: new Date(`${data.data}T${data.horario}:00-03:00`),
      petId: pet.id,
      servicos: services.map((service) => service.id),
    };

    console.log("Agendamento", newScheduleData);

    const newSchedule = await scheduleService.createAgend(newScheduleData);

    return res.status(201).json({
      error: false,
      message: `Agendamento criado com sucesso`,
      schedule: newSchedule,
    });
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error.message}` });
  }
};

const listSchedule = async (req, res) => {
  try {
    const allSchedule = await scheduleService.listAgends();
    return res.status(200).json({
      error: false,
      message: `Agendamento listados com sucesso`,
      schedules: allSchedule,
    });
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error.message}` });
  }
};

const listScheduleByDay = async (req, res) => {
  try {
    const { day } = req.params;
    const date = day.split("T")[0];

    const startDay = new Date(`${date}T00:00:00.000-03:00`);
    const endDay = new Date(`${date}T00:00:00.000-03:00`);
    endDay.setUTCDate(endDay.getUTCDate() + 1);

    let schedules = await Agend.find({
      date: {
        $gte: startDay,
        $lt: endDay,
      },
    });

    if (schedules.length == 0) {
      return res.status(200).json({
        error: false,
        message: `Agendamento do dia listados com sucesso`,
        schedules: schedules,
      });
    }

    schedules = schedules.map((schedule) => {
      const hour = new Date(schedule.date).toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      return { hour };
    });

    return res.status(200).json({
      error: false,
      message: `Agendamento do dia listados com sucesso`,
      schedules: schedules,
    });
  } catch (error) {
    return res.status(500).json({ error: true, message: `${error.message}` });
  }
};

const scheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        error: true,
        message: `Não endontrado ID de agendamento na requisição`,
      });
    }

    const schedule = await scheduleService.getAgendById(id);
    if (!schedule) {
      return res
        .status(404)
        .json({ error: true, message: `Agendamento não encontrado` });
    }

    return res.status(200).json({
      error: false,
      message: `Agendamento encontrado com sucesso`,
      client: schedule,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Erro ao buscar Agendamento: ${error.message}`,
    });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        error: true,
        message: `Não endontrado ID de agendamento na requisição`,
      });
    }

    const client = await scheduleService.deleteAgend(id);
    if (!client) {
      return res
        .status(404)
        .json({ error: true, message: `Agendamento não encontrado` });
    }

    return res
      .status(200)
      .json({ error: false, message: `Agendamento deletado com sucesso` });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Erro ao deletar agendamento: ${error.message}`,
    });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const client = await scheduleService.updateClient(id, updateData); // TODO: hehehe
    if (!client) {
      return res
        .status(404)
        .json({ error: true, message: `Cliente não encontrado` });
    }

    return res.status(200).json({
      error: false,
      message: `Cliente atualizado com sucesso`,
      client,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Erro ao atualizar cliente: ${error.message}`,
    });
  }
};

module.exports = {
  createSchedule,
  listSchedule,
  listScheduleByDay,
  scheduleById,
  deleteSchedule,
  updateClient,
};
