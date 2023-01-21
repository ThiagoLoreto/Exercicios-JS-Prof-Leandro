/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media() {
    let vetor = [1, 2, 3, 4, 5]
    let soma = 0
    for(let i in vetor) {
        soma += vetor[i]
    }
    let mediaFinal = soma / vetor.length
    return mediaFinal
}

console.log(media())


