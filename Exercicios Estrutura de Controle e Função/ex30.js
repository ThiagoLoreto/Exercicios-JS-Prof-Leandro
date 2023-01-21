/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

function maiorMenor() {
    vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
    vetor.sort()
    let max = 0
    for(let i in vetor) {
        if (vetor[0]){

        }
        if(vetor[i] >= max) {
            max = vetor[i]
        }
    }
    return [max, vetor[0]]
}
console.log(maiorMenor())