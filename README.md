# Projeto-Encanto-Pet-Uninove
Projeto de extensão em desenvolvimento de software

# Tabelas

## Clientes
```
    id: UUID
    name: String
    phone: String
    email: String
    password: String
    pets: Pets[]
    street: String
    number: Number
    complement: String
    district: String
    city: String
    uf: String
    cep: String
    isActive: Boolean
    createAt: Timestamp
    updateAt: Timestamp
```


## Funcionários
```
    id: UUID
    name: String
    email: String
    password: String
    role: ["admin", "staff"]
    isActive: Boolean
    createAt: Timestamp
    updateAt: Timestamp
```

## Pets
```
    id: UUID
    name: String
    breed: String
    personality: String
    medicalNeeds: String
    createAt: Timestamp
    updateAt: Timestamp
```

## Serviços
```
    id: UUID
    name: String
    value: Number
    duration: String
    isActive: Boolena
    createAt: Timestamp
    updateAt: Timestamp
```

## Agendamentos
```
    id: UUID
    clientId: UUID
    petId: UUID
    services: Services[]
    status: String
    date: Timestamp
    createAt: Timestamp
    updateAt: Timestamp
```


