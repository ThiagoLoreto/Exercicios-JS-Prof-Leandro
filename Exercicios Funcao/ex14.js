function objetoParaArray (objeto) {
    const array = Object.entries(objeto)
    return array
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissão: 'Desenvolvedora de software'
}))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))