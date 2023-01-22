/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocavetores (vetorA, vetorB) {
    for(let i in vetorA) {
        vetorB.push(vetorA[i])
    }
    
    for(let i = 0; i < 3; i++) {
        vetorA.push(vetorB[i])
    }
vetorB.splice(0, vetorB.length/2)
vetorA.splice(0, vetorA.length/2)

console.log(vetorA, vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocavetores(vetorA, vetorB)
