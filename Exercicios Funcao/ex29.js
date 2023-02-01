function segundoMaior(array) {
    const novo = array.sort((a, b) => a-b)
    const segundoMaior = novo.slice (-2, -1)
    console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])


/*
function segundoMaior(array) {
    array.sort((a, b) => a-b)
    array.pop()
    array.splice(0, array.length - 1)
    console.log(array)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])
*/