const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { email, gender, name, cep, id, cargo, dataNas, estadocivil, endereco,
            bairro, cidade, telefone1, telefone2, celular, identidade, cpf,
            veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.name = name;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.id = id;
        newCandidate.cargo = cargo;
        newCandidate.dataNas = dataNas;
        newCandidate.estadocivil = estadocivil;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ocorreu um erro!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};