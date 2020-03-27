//aqui vai ser responsavel pelo perfil de uma ONG
const connection = require('../database/connection');
//retorna dados especificos de uma unica ong
module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        //busca todos os casos:
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }

}