function novoArray (vetor) {
    const primeiroEUltimo = []
    primeiroEUltimo.push(vetor[0], vetor[vetor.length - 1])
    return primeiroEUltimo
}

console.log(novoArray([7, 14, 'olá']))
console.log(novoArray([-100, 'aplicativo', 16]))
console.log(novoArray([1, 2, 3, 4, 5, 6, 7, 8]))