/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function negativos () {
    let vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
    let neg = 0
    for (let i in vetor) {
        if(vetor[i] < 0) {
            neg++
        }
    }
    return neg
}

console.log(negativos())