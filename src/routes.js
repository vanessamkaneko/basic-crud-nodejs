import express from 'express'
import { ExameClinicoController } from './controllers/ExameClinicoController'

const router = express.Router()

const exameClinicoController = new ExameClinicoController

router.get('/exame-clinico', exameClinicoController.teste)

router.post('/exame-clinico', exameClinicoController.criarExame)
router.get('/exame-clinico/todos', exameClinicoController.pegarExames)
router.put('/exame-clinico/editar/:id', exameClinicoController.editarExame)
router.patch('/exame-clinico/editar/:id', exameClinicoController.editarNomePaciente)
router.delete('/exame-clinico/:id', exameClinicoController.deletarExame)

export { router }
