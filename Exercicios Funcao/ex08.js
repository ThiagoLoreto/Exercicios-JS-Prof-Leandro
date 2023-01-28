function multiplicar (num1, num2) {
    let multiplicacao = 0
    for(let i = 1; i <= num2; i++) {
        multiplicacao += num1
    }
    console.log(multiplicacao)
}

multiplicar(5, 5)
multiplicar(0, 7)
multiplicar(4, 8)
multiplicar(4, 1)