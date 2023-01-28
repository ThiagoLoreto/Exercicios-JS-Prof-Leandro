function filtrarNumeros (vetor) {
    const vetorDeNumeros = []
    for(let i of vetor) {
        if (typeof i === 'number') vetorDeNumeros.push(i)
    }
    return vetorDeNumeros
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]))
console.log(filtrarNumeros(['a', 'c']))
console.log(filtrarNumeros(['a', 'b', 1, 3, 4, 2, 5, 'Thiago, curso', 9, 8]))


/*
function filtrarNumeros (vetor) {
    return vetor.filter(i => typeof i === 'number')
}
*/