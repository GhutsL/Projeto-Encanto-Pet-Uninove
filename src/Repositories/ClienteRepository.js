class ClienteRepository {
    constructor(db) {
        this.collection = db.collection("clientes");
    }

    async buscarPorGoogleId(googleId) {
        return await this.collection.findOne({ googleId: googleId });
    }
    
    async criar(dadosCliente) {
    const resultado = await this.collection.insertOne(dadosCliente);

    return resultado;
    }

    
    async atualizar(googleId, dadosAtualizados) {
    const resultado = await this.collection.updateOne(
        { googleId: googleId },
        { $set: dadosAtualizados }
    );

    return resultado;
    }


}

module.exports = ClienteRepository;
