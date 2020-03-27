//importanto as funcionalidade do express
const express = require('express');
//importando a chave de segurança da aplicação:
const cors = require('cors');

//usa ponto barra pq é um arquivo, ele referencia que o caminho é o mesmo do index
const routes = require('./routes');
//criando a instância da aplicação onde vai ter as funcionalidade (rotas..)
const app = express();

app.use(cors()); // quando for deixar o projeto em produção, envia a opção chamada origin que é qual o endereço que vai dar acesso a aplicação
//para poder dizer ao terminal que as info vão estar passando por JSON(no insomnia)
//esse comando transforma a minha requisisção(no insomia)em objeto do javaScript(pra linguagem entender)
app.use(express.json());
app.use(routes);

/** METODOS HTTPS
 * GET: buscar uma informção do back-end
 * POST: criar uma info no back-end
 * PUT: alterar uma info -||-
 * DELETE: deletar uma indo -||-
 */

 /** 
  * Tipos de parametros
  * 
  * Query: parametros nomeados enviados na rota após "/"(filtros, paginação)
  * Route parms: Parametros ultilizados para identificar recursos especificos
  * Request Body: Cpor da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite // vai ser usado o sql pq ja tem nos arquivos n precisa baixar mais nada
   * NoSQL: MongoDB, CouchDB
   */

  /** pra linkar o bd
   *Driver: SELECT * FROM users 
   * Query Builder: table('user').select('*').where()
   */




//limpando a aplicação para ouvir a porta 3333
app.listen(3333);