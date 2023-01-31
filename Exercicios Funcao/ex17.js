function somarNumeros (vetor) {
    let soma = 0
    for(let i in vetor) {
        soma += vetor[i]
    }
    console.log(soma)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])

/*
function somarNumeros (vetor) {
    let soma = 0
    vetor.forEach(vetor => soma += numero)
    console.log(soma)
}
*/