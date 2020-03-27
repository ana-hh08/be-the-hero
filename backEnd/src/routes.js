const express = require('express');
//pacote que consegue gerar strinh aleatorio:
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//export o arquivo dentro do arquivo que precisamos nos comnunicar com o bd:
const routes = express.Router();

//rota de login
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//pra ver que eles estão sendo listados
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);
//rota pra deletar
routes.delete('/incidents/:id', IncidentController.delete);


//exportar uma variavel de dentro de um arquivo:
module.exports = routes;