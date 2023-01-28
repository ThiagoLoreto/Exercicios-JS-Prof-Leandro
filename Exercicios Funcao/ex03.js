const calcularSalario = (horas, valorHora) => `Salário igual a R$ ${horas * valorHora}`

console.log(calcularSalario(150, 40.5))


// Com imposto

const salario = (horas, valorHora) => `Salário igual a R$ ${(horas * valorHora * 0.70).toFixed(2)}`

console.log(salario(180, 60))



function calcularSalarioLiquido (horas, valorHora) {
    const salario = horas * valorHora * (1 - 30/100)
    return `Salário igual a R$ ${(salario).toFixed(2)}`
}

console.log(calcularSalarioLiquido(180, 60))
