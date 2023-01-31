function inverter(objeto) {
    const keys = Object.keys(objeto)
    const valores = Object.values(objeto)

    const objeto2 = {}
    for (let i in keys) {
        objeto2[valores[i]] = keys[i]
    }
    console.log(objeto2)
}

inverter({ a: 1, b: 2, c: 3 })

// Outra forma
function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverter2({ a: 1, b: 2, c: 3 }))