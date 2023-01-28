function mais (numero) {
    const vetor = []
    for(let i = 1; i <= numero; i++) {
        vetor.push('+')
    }
    return vetor.join('')
}

console.log(mais(2))
console.log(mais(4))

/*
function mais (numero) {
    return "+".repeat(numero)
}
*/