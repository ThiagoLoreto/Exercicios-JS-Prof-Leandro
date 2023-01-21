/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function paresImpares (vetores) {
    
    let pares = 0
    let impares = 0
    for(let i in vetores) {
        if(vetor[i]%2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`pares: ${pares}, impares: ${impares}`)
}

paresImpares(vetor)