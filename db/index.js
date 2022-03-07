const { Client } = require("pg");
const client = new Client({
 connectionString: "postgres://postgres:Biscoito2012@localhost/Carros"  //postgres://usuario:senha@servidor:porta/banco
});
client.connect();
module.exports = client;
