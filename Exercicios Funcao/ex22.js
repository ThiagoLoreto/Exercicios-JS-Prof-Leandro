function numeroAleatorio(numero) {
    const aleatorio = Math.floor(Math.random() * 10) + 1
    if(aleatorio === numero) return `Parabéns! O número sorteado foi o ${aleatorio}`
    return `Que pena! O número sorteado foi o ${aleatorio}`
}

console.log(numeroAleatorio(10))
console.log(numeroAleatorio(5))
console.log(numeroAleatorio(5))

console.log('--------------')

function funcaoDaSorte(num) {
    const numeroAleatorio = gerarNumeroAleatorio()
    if(numeroAleatorio === num) return `Parabéns! O número sorteado foi o ${numeroAleatorio}`
    return `Que pena! O número sorteado foi o ${numeroAleatorio}`
}

function gerarNumeroAleatorio (max = 10, min = 1) {
    const aleatorio = Math.floor(Math.random() * (max - min)) + min
    return aleatorio
}

console.log(funcaoDaSorte(8))
