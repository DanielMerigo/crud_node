const { Client } = require("pg");c //Criando uma variavel para conectar com o pg
const client = new Client({        //Dando outro nome para a variavel 
 connectionString: //"postgres://usuario:senha@servidor:porta/banco"        //aqui conectaremos com o postgreSQL e com a database
});
client.connect();                  //Usado para conectar o cliente 
module.exports = client;           //Usado para extrair a conexão para outros arquivos de codigos

