function pares(vetor) {
    const novovetor = []
    for (let i in vetor) {
        if (i % 2 === 0 && vetor[i] % 2 === 0)
            novovetor.push(vetor[i])
    }
    return novovetor
}

console.log(pares([1, 2, 3, 4]))
console.log(pares([10, 70, 22, 43]))