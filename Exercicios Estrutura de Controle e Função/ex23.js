/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function media (codigo, nota1, nota2, nota3) {
    let max = 0
    let mid = 0
    let min = 0
    
    if(nota1 > nota2 && nota1 > nota3){
        max = nota1
        mid = nota2
        min = nota3
    }
    if(nota2 > nota1 && nota2 > nota3){
        max = nota2
        mid = nota1
        min = nota3
    }
    if(nota3 > nota2 && nota3 > nota1){
        max = nota3
        mid = nota2
        min = nota1
    }
    
    let mediaPonderada = (4*max + 3*mid + 3*min) / 10

    if (mediaPonderada >= 5) {
        console.log(`codigo: ${codigo}; notas: ${nota1}, ${nota2}, ${nota3}; media: ${mediaPonderada}; APROVADO`)
    } else {
        console.log(`codigo: ${codigo}; notas: ${nota1} ${nota2} ${nota3}; media: ${mediaPonderada}; REPROVADO`)
    }
}

media(2, 5, 4, 3)


/*
function media2 (codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1, nota2, nota3)
    notas.sort()
    let mediaPonderada = (4*notas[2] + 3*notas[1] + 3*notas[0]) / 10

    if (mediaPonderada >= 5) {
        console.log(`codigo: ${codigo}; notas: ${nota1}, ${nota2}, ${nota3}; media: ${mediaPonderada}; APROVADO`)
    } else {
        console.log(`codigo: ${codigo}; notas: ${nota1} ${nota2} ${nota3}; media: ${mediaPonderada}; REPROVADO`)
}
}

media2(2, 5, 4, 3)
*/