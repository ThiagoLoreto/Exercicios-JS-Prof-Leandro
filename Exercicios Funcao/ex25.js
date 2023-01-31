function buscarPalavrasSemelhantes (palavra, array) {
    return array.filter(trecho => trecho.includes(palavra))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))