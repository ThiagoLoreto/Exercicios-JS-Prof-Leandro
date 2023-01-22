/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function contadorNotas (dinheiro) {
    const cedulas = [100, 50, 10, 5, 1]
    
    for(var i in cedulas) {
        const quantidade = parseInt(dinheiro / cedulas[i])
        const resto = dinheiro % cedulas[i]  
        if(quantidade == 0){

        } else {
            console.log(`${quantidade} nota(s) de R$${cedulas[i]}.`)
            dinheiro = resto
        }
    }
}

contadorNotas(18)
console.log('outro teste...')
contadorNotas(157)

/*
function contadorNotas (dinheiro) {
    const cedulas = [100, 50, 10, 5, 1]
    const valores = []
    for(var i in cedulas) {
        const quantidade = parseInt(dinheiro / cedulas[i])
        const resto = dinheiro % cedulas[i]  
        if(quantidade == 0){
            valores.push('')
            dinheiro = resto
        } else {
            valores.push(`${quantidade} nota(s) de R$${cedulas[i]}.`)
            dinheiro = resto
        }
    }
    console.log(valores[0], valores[1], valores[2], valores[3], valores [4])
}

contadorNotas(18)
*/
