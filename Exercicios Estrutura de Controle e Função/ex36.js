/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let vetor = [1, 2, 3, 4, 5]

function multiplicador (vetor, num) {
    vetor2 = vetor.map(e => e * num)
    return vetor2
}

function multiplicador2 (vetor2, num) {
    if(num > 5) {
        vetor3 = vetor2.map(e => e * num)
        return vetor3
    } else {
        return ''
    }
}

console.log(multiplicador(vetor, 3))
console.log(multiplicador2(vetor, 6))
console.log(multiplicador2(vetor2, 6))
