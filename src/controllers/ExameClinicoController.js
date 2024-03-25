import { ExameClinicoModel } from "../models/ExameClinicoModel"

export class ExameClinicoController {
  constructor() {

  }

  teste(req, res) {
    res.send('ok')
  }

  async criarExame(req, res) {

    const exameClinicoModel = new ExameClinicoModel()

    try {
      const {
        nomePaciente, nomeExame, especie, idade, peso, rg
      } = req.body

      const exameCriado = await exameClinicoModel.criar({nomePaciente, nomeExame, especie, idade, peso, rg})

      res.status(201).json(exameCriado)
    }catch(err) {
      res.status(400).json(err.message)
    }
  }

  async pegarExames(req, res) {

    const exameClinicoModel = new ExameClinicoModel()

    try {
      const exames = await exameClinicoModel.pegarExames()

      res.json(exames)
    }catch(err) {
      res.status(400).json(err.message)
    }
  }

  async editarExame(req, res) {
    const exameClinicoModel = new ExameClinicoModel()

    const {
      nomePaciente, nomeExame, especie, idade, peso, rg
    } = req.body

    try {
      const exameEditado = await exameClinicoModel.editarExame({
        id: req.params.id, nomePaciente, nomeExame, especie, idade, peso, rg
      })

      return res.json(exameEditado)
    } catch(err) {
      res.status(400).json(err.message)
    }
    
  }

  async editarNomePaciente(req, res) {
    const exameClinicoModel = new ExameClinicoModel()

    const {
      nomePaciente
    } = req.body

    try {
      const exameEditado = await exameClinicoModel.editarNomePaciente({
        id: req.params.id, nomePaciente
      })

      return res.json(exameEditado)
    } catch(err) {
      res.status(400).json(err.message)
    }
    
  }

  async deletarExame(req, res) {
    const exameClinicoModel = new ExameClinicoModel()
    try {
      await exameClinicoModel.deletarExame(req.params.id)

      return res.status(204).end()
    } catch(err) {
      res.status(400).json(err.message)
    }
    
  }
}