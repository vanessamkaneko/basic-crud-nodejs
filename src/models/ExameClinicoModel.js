import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExameClinicoSchema = new Schema({
  nomePaciente: {type: String, required: true},
  nomeExame: {type: String, required: true},
  especie: {type: String, required: true},
  idade: {type: String, required: true},
  peso: {type: Number, required: true},
  rg: {type: String, required: true},
  criadoEm: {type: Date, default: Date.now},
});

const ExameClinico = mongoose.model('ExameClinico', ExameClinicoSchema);

export class ExameClinicoModel {
  constructor(){}

  async criar({nomePaciente, nomeExame, especie, idade, peso, rg}) {
    const exameCriado = await ExameClinico.create({nomePaciente, nomeExame, especie, idade, peso, rg})

    return exameCriado
  }

  async pegarExames() {
    const exames = await ExameClinico.find({})

    return exames
  }

  async editarExame({id, nomePaciente, nomeExame, especie, idade, peso, rg}) {
    const exameEditado = await ExameClinico.findByIdAndUpdate(id, {
      nomePaciente,
      nomeExame,
      especie,
      idade,
      peso,
      rg
    },{
      returnOriginal: false
    })

    return exameEditado
  }

  async editarNomePaciente({id, nomePaciente}) {
    const exameEditado = await ExameClinico.findByIdAndUpdate(id, {
      nomePaciente
    },{
      returnOriginal: false
    })

    return exameEditado
  }

  async deletarExame(id) {
    return await ExameClinico.findByIdAndDelete(id)
  }
}