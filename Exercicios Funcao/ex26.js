function removerVogais(string) {
     string = string.replace('a', '')
     string = string.replace('e', '')
     string = string.replace('i', '')
     string = string.replace('o', '')
     string = string.replace('u', '')

    return string
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))

function outroMetodo(palavra) {
    const vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))
    return palavra
}

console.log(outroMetodo('Cod3r'))
console.log(outroMetodo('Fundamentos'))