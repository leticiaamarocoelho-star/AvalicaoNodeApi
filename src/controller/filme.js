import ServiceFilme from '../service/filme.js'

class ControllerFilme {

    Buscar(req, res) {
        try {
            const filme = ServiceFilme.Buscar()
            
            res.send({ filme })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilme.BuscarUm(id)
            res.send({ filme })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Criar(req, res) {
        try {
            const Titulo = req.body.Titulo
            const Classificacao = req.body.Classificacao
            const Descricao = req.body.Descricao
            const Lancado = req.body.Lancado
            ServiceFilme.Criar(Titulo, Classificacao, Descricao, Lancado )

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Alterar(req, res) {
        try {
            const id = req.params.id
            const Titulo = req.body.Titulo
            const Classificacao = req.body.Classificacao
            const Descricao = req.body.Descricao
            const Lancado = req.body.Lancado

            ServiceFilme.Alterar(id,Titulo, Classificacao, Descricao, Lancado)
            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }


    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceFilme.Deletar(id)
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ menssagem: error.menssagem })
        }
    }

    
}

export default new ControllerFilme()