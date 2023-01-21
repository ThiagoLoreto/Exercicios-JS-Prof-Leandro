/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function alturas (alturaI1, alturaI2, taxaCresc1, taxaCresc2) {
    if (alturaI1 < alturaI2 && taxaCresc2 >= taxaCresc1) {
        console.log('A criança 1 não ultrapassará a 2.')
    }
    if (alturaI2 < alturaI1 && taxaCresc1 >= taxaCresc2) {
        console.log('A criança 2 não ultrapassará a 1.')
    }
    if(alturaI1 == alturaI2 && taxaCresc1 == taxaCresc2) {
        console.log('As crianças tem mesma altura e taxa de crescimento')
    }
    if(alturaI1 <= alturaI2 && taxaCresc1 > taxaCresc2) {
        for (var i = 0; alturaI1 <= alturaI2; i++){
            alturaI1 += taxaCresc1
            alturaI2 += taxaCresc2
        }
        console.log(`A criança 1 ultrapassará a 2 em ${i} anos.`)
    }
    if(alturaI2 <= alturaI1 && taxaCresc2 > taxaCresc1) {
        for (var i = 0; alturaI2 <= alturaI1; i++){
            alturaI1 += taxaCresc1
            alturaI2 += taxaCresc2
        }
        console.log(`A criança 2 ultrapassará a 1 em ${i} anos.`)
    }
}

alturas(160, 150, 1, 2)
alturas(180, 130, 1, 4)