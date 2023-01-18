/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial (num) {
    let resposta = 1
    if (num == 0) {
        console.log(1)
    } else {
        for (let i = num; i >= 1; i--){
            resposta *= i
        }
        console.log(resposta)
    }
}

fatorial(5)
fatorial(10)


/*
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
*/