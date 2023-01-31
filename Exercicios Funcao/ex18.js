function despesasTotais (array) {
    let soma = 0
    for(let objetos of array) {
        soma += objetos.preco
    }
    console.log(soma)
}

despesasTotais([
    {nome: 'Jornal online', categoria: 'Informação', preco: 89.99},
{nome: 'Cinema', categora: 'Entretenimento', preco: 150}])

despesasTotais([
    {nome: 'Jornal online', categoria: 'Informação', preco: 3599.99},
{nome: 'Cinema', categora: 'Entretenimento', preco: 30999.99}])