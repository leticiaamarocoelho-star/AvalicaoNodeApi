import Filme from '../model/filme.js'

class ServiceFilme {

    Buscar() {
        return Filme.Buscar()
    }


    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Filme.BuscarUm(id)
    }


    Criar(id, Titulo, Classificacao, Descricao, Lancado) {
        if(!id || isNaN(id) || !Titulo || !Classificacao || !Descricao || !Lancado) {
            throw new Error("Favor informar nome")
        }
        Filme.Criar(id, Titulo, Classificacao, Descricao, Lancado)
    }


    Alterar(id, Titulo, Classificacao, Descricao, Lancado) {
        if(!id || isNaN(id) || !Titulo || !Classificacao || !Descricao || !Lancado) {
            throw new Error("Favor informar todos os dados")
        }
        Filme.Alterar(id, Titulo, Classificacao, Descricao, Lancado)
    }


    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o ID corretamente")
        }
        Filme.Deletar(id)
    }

}

export default new ServiceFilme()