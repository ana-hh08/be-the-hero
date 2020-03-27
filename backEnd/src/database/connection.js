//aqui faz a conecaxão com o bd

const knex = require('knex');
const configuration = require('../../knexfile');

//aqui acessa o arquivo em especifico a função do arquivo knex
const connection = knex(configuration.development);

module.exports = connection;