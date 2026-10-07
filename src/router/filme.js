import express from "express"
import ControllerFilme from '../controller/filme.js'

const router = express.Router()


router.get("/Buscar", ControllerFilme.Buscar)
router.get("/BuscarUm/:id", ControllerFilme.BuscarUm)
router.post("/Criar",  ControllerFilme.Criar)
router.put("/Alterar/:id",  ControllerFilme.Alterar)
router.delete("/Deletar/:id",  ControllerFilme.Deletar)


export default router