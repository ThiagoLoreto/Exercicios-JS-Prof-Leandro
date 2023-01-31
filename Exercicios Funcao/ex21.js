function menorNumero (array) {
    let menor = array[0]
    for(let numero of array) {
        if (menor > numero) menor = numero
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])

/*
function menorNumero (numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
*/