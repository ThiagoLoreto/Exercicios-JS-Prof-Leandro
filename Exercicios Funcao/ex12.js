function removerPropriedade (objeto, propriedade) {
     const novoobjeto = Object.assign({}, objeto)
     delete novoobjeto[propriedade]
     return novoobjeto
}
    

console.log(removerPropriedade({a: 1, b: 2}, 'a'))