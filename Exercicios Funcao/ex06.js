function tipos (valor) {
    if(typeof valor === 'boolean') return !valor
    if(typeof valor === 'number') return -valor
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(tipos(true))
console.log(tipos(false))
console.log(tipos(5))
console.log(tipos(-3))
console.log(tipos('a'))