/*
O cardápio de uma lanchonete é o seguinte:
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function cardapio (codigo, quantidade){
    switch (codigo) {
        case 100:
            return `Valor pagar = R$${quantidade * 3}`
        case 200:
            return `Valor a pagar = R$${quantidade * 4}`
        case 300:
            return `Valor a pagar = R$${quantidade * 5.5}`
        case 400:
            return `Valor a pagar = R$${quantidade * 7.5}`
        case 500:
            return `Valor a pagar = R$${quantidade * 3.5}`
        case 600:
            return `Valor a pagar = R$${quantidade * 2.8}`
        default:
            return 'Produto não existe'
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))