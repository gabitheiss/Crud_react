const db = require('./db');

const Pessoa = db.conexao.define('tabela',{
    nome:{
        type:db.Sequelize.STRING
    },
    idade:{
        type:db.Sequelize.INTEGER
    }
})
module.exports = Pessoa;

//Pessoa.sync({force:true})