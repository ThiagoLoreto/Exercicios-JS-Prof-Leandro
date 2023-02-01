function filtrarPorQuantidadeDeDigitos(vetor, tamanho) {
    let novoVetor = [...vetor]
    novoVetor = novoVetor.map(e => String(e))
    novoVetor = novoVetor.filter(e => e.length === tamanho)
    novoVetor = novoVetor.map(e => Number(e))
    console.log(novoVetor)
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)

