const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')


conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else {

        console.log('conectado com o db')
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
});


