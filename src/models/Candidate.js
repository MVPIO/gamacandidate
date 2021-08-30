const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, unique: true, requere: true},
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, require: true},
    dataNas: { type: String, unique: false, require: true},
    estadocivil: { type: String, unique: false, requere: true},
    endereco: { type: String, unique: false, requere: true},
    bairro: { type: String, unique: false, requere: true},
    cidade: { type: String, unique: false, requere: true},
    telefone1: { type: String, unique: false, requere: true},
    telefone2: { type: String, unique: false, requere: true},
    celular: { type: String, unique: false, requere: true},
    identidade: { type: String, unique: true, requere: true},
    cpf: { type: String, unique: true, requere: true},
    veiculo: { type: String, unique: false, requere: true},
    habilitacao:{ type: String, unique: false, requere: true}
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);