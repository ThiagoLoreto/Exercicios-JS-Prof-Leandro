/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/


function caracteresContidos (string1, string2) {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    let frase1 = string1.split('')
    let frase2 = string2.split('')
    frase1.sort()
    frase2.sort()
    frase1 = frase1.join('')
    frase2 = frase2.join('')
    
    if (frase1 == frase2) {
        return true
    }
    if (frase1 != frase2) {
        return false
    }
}

console.log(caracteresContidos('acdb', 'adcbf'))
console.log(caracteresContidos('acdb', 'adcb'))
