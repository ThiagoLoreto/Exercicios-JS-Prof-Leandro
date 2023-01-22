/*
38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function valoresImpares (inicio = 0, fim = 100) {
    let min = inicio
    let max = fim
    if (fim < inicio) {
        min = fim
        max = inicio
    }
    for (let i = min; i <= max; i++) {
        if(i%2 != 0) {
            console.log(i)
        }
    }
}

valoresImpares(19, 3)