/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function valorAnuidade (mes, anuidade) {
    let montante = anuidade * ((1 + 0.05)**(mes-1))
    if (mes >= 1 || mes <=12){
       return montante.toFixed(2) 
    } else {
        return 'Mês inválido'
    }
    
}

console.log(valorAnuidade(4, 100))