/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

let string = '10, 20, 20, 8, 25, 3, 0, 30, 1'
let pontos = string.split(', ')

function valores (pontos) {
    let maiorPontuacao = pontos[0]
    let recordes = 0
    let menorPontuacao = pontos[0]
    let posicaoMenor = 0
    for (var i = 1; i <= pontos.length; i++){
        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            recordes++
        }
        if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            posicaoMenor = i+1
        }
    }
    return [recordes, posicaoMenor]
}

console.log(valores(pontos))

