function repetir (elemento, repeticoes) {
    let vetor = []
    for(let i = 1; i <= repeticoes; i++){
        vetor.push(elemento)
    }
    return vetor
}

console.log(repetir('codigo', 2))
console.log(repetir(7, 3))

/*
function repetir (item, quantidade) {
    return Array(quantidade).fill(item)
}
*/