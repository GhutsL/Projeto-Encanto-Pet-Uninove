let userTable = [
  {
    id: "001",
    name: "Leonardo Sousa",
    email: "leonardo.sousa@encontopet.com.br",
    password: "123456",
    role: "admin",
    isActive: true,
    createAt: 1791793870,
    updateAt: 1791793870,
  },
];

let servicesTable = [
  {
    id: "001",
    name: "Banho",
    value: 50.0,
    duration: "1h",
    isActive: true,
    createAt: 1791793870,
    updateAt: 1791793870,
  },
];

let clientTable = [
  {
    id: "001",
    name: "Leonardo Sousa",
    phone: "11999999999",
    email: "leonardo.sousa@encontopet.com.br",
    password: "123456",
    pets: [],
    street: "Rua x",
    number: "123",
    complement: "AP 02",
    state: "SP",
    city: "São Paulo",
    uf: "SP",
    cep: "01310100",
    isActive: true,
    createAt: 1791793870,
    updateAt: 1791793870
  },
];

module.exports = {
  userTable,
  servicesTable,
  clientTable
};
