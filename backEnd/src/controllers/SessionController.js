//Criando uma sessão(login)
const connection = require('../database/connection');
module.exports = {
    async create(request, response){
        //a rota login apenas verifica se realmente existe, assim faz a validação da ong
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first(); //n retorna um Array, retorna aoenas um resultado

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}