//conexão com bd:
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query; // se page n existir, por padrao, retorna 1

        //query que vai retornar a qtd de casos -- cochetis retorna a primeira posição do array
        const [count] = await connection('incidents').count();
        console.log(count);

        const incidents = await connection('incidents')//(nome da tabela depois de connectiom)
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //banco de dados basico(careca hehe)
        .limit(5) //limita os dados que a busca no bd vai fazer
        .offset((page -1) *5) //vai pular 5 registro por paginas (vai começar do zero e pegar os prox 5 registros)
         //no resultado os ids estão iguais(mostrando a primary e foreign key), para resolver:
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city',
             'ongs.uf'
        ]);


        
        
        response.header('X-Total-Count', count['count(*)']);  
        //total de itens que a gente tem na lista

        return response.json(incidents);
    },



    async create(request,response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        //array de uma posição:
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        /** headers guarada a autenticação do usuario// dados sobre o idioma tbm // tudo oq caracteriza o contexto da requisição */
        //manda com chaves pq ai fica o nome da info que esta sendo enviada
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        //precisa verificar quem esta realmente deletando o caso da ong

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();
    
        if(incident.ong_id =! ong_id){
            return response.status(401).json({ error: 'operation not permited'});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
        }
};