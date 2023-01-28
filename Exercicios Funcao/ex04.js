function retornarMes(numero) {
    switch (numero) {
        case 1:
            return 'janeiro'
            break
        case 2:
            return 'fevereiro'
            break
        case 3:
            return 'março'
            break
        case 4:
            return 'abril'
            break
        case 5:
            return 'maio'
            break
        case 6:
            return 'junho'
            break
        case 7:
            return 'julho'
            break
        case 8:
            return 'agosto'
            break
        case 9:
            return 'setembro'
            break
        case 10:
            return 'outubro'
            break
        case 11:
            return 'novembro'
            break
        case 12:
            return 'dezembro'
            break
    }
}

console.log(retornarMes(1))
console.log(retornarMes(4))


function nomeDoMes (numero) {
    const meses = ['janeiro', 'favereiro', 'março', 'abril', 'maio', 'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    for (let i = 0; i <= 11; i++) {
        if (i + 1 === numero) {
            return meses[i]
        }
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))


function nomeMes (numero) {
    const meses = ['janeiro', 'favereiro', 'março', 'abril', 'maio', 'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[--numero]
}

console.log(nomeMes(1))
console.log(nomeMes(4))