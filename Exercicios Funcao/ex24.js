function contarCaractere(letra, frase) {
    let quantidade = 0
    for (let valor of frase) {
        quantidade += valor === letra ? 1 : 0
    }
    return quantidade
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))
console.log(contarCaractere('r', 'O rato roeu a roupa do rei de Roma'))