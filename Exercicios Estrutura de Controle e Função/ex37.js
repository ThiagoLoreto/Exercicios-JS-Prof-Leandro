/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function PA (n, a1, r) {
    let soma = 0
    for(let i = 0; i < n; i++){
            console.log(a1 + r*i)
            soma += a1 + r*i
    }
    console.log(`soma = ${soma}`)
}

function PG (n, a1, r) {
    let soma = 0
    for (let i = 0; i < n; i++) {
        if(i == 0) {
            console.log(a1)
            soma += a1
        } else {
            a1 *= r 
            console.log(a1)
            soma += a1
        }
    
    }
    console.log(`soma = ${soma}`)
}

PA(10, 10, 15)
console.log('----------------------')
PG(10, 5, 3)