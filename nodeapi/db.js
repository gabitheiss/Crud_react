const Sequelize = require('sequelize');

const conexao = new Sequelize('crud','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = {
    Sequelize:Sequelize,
    conexao:conexao
}