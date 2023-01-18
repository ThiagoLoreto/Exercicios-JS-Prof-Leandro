/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function divisel3(num) {
    if (num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisel3(9))
console.log(divisel3(10))
console.log(divisel3(12))
console.log(divisel3(17))
console.log(divisel3(150))