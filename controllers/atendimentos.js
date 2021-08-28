module.exports = app => {

    app.get('/atendimentos', (req, res) =>  res.send('vc esta na rota de atendimentos'));

    app.post('/atendimentos', (req, res) => {

        console.log(req.body);  
        res.send('vc esta na rota de atendimentos e esta relizando um POST')
    })

}