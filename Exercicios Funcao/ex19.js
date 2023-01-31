function calcularMedia (array) {
    let soma = 0
    for(let numero of array) {
        soma += numero
    }
    const media = soma / array.length
    console.log(media)
}

calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])

// Outra forma
function mediafuncao (array) {
    const soma = array.reduce((acumulador, numero) => acumulador + numero)
    const media = soma / array.length
    console.log(media) 
}

mediafuncao([0, 10])
mediafuncao([1, 2, 3, 4, 5])

