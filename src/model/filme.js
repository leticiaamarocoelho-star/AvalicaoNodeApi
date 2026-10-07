const filme = [
    { Titulo: "Patrulha Canina", Classificacao: 3 , Descricao: "Infantil", Lancado: "Sim" },
    { Titulo: "Velozes e Furiosos", Classificacao: 12, Descricao: "Acao", Lancado: "Nao" },
    { Titulo: "A invocacao", Classificacao: 18, Descricao: "Terror", Lancado: "Sim" },
    { Titulo: "Rei de Porcelana", Classificacao: 14, Descricao: "Romance", Lancado: "Nao" }
]


class Filme {

    Buscar() {
        return filme
    }
    

    BuscarUm(id) {
        return filme[id]
    }


    Criar (Titulo, Classificacao, Descricao, Lancado  ) {
        filme.push(Titulo, Classificacao, Descricao, Lancado )
    }


    Alterar (id, Titulo, Classificacao, Descricao, Lancado ) {
        filme[id].Titulo = Titulo
        filme[id].Classificacao = Classificacao
        filme[id].Descricao = Descricao
        filme[id].Lancado = Lancado
    }


    Deletar(id) {
        filme.splice(id, 1)
    }
    
}

export default new Filme ()