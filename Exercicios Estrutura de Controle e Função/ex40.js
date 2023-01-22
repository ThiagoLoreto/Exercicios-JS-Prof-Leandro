/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/

function conceito(notas) {
    for(let i = 0; i <= notas.length; i++) {
        if (notas[i] > 10 || notas [i] < 0) {
            notas[i] = 'Nota inválida'
        }
        if (notas[i] <= 4.9) {
            notas[i] = 'D'
        }
        if (notas[i] <= 6.9) {
            notas[i] = 'C'
        }
        if (notas[i] <= 8.9) {
            notas[i] = 'B'
        }
        if (notas[i] <= 10) {
            notas[i] = 'A'
        }
    }
    console.log(notas)
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

conceito(notas)