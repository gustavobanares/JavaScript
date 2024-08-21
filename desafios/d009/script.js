const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function reajustar(){
    let funcionario = window.prompt(`Qual o nome do funcionario?`)
    let salario = Number(window.prompt(`Qual e o salario de ${funcionario}?`))
    let aumento = Number(window.prompt(`O salario de ${funcionario} vai ser reajustado em qual porcentagem?`))
    valorAdicional = aumento * salario
    resultado = valorAdicional / 100
    salarioFinal = salario + resultado

    res.innerHTML += `<p><strong>${funcionario} recebeu um aumento salarial!</strong></p>`
    res.innerHTML += `<p>O salario atual era R$${salario.toFixed(2).replace('.', ',')}.</p>`
    res.innerHTML += `<p>Com um aumento de ${aumento}%, o salario vai aumentar R$${resultado.toFixed(2).replace('.', ',')} no proximo mes.</p>`
    res.innerHTML += `<p>E a partir dai, ${funcionario} vai passar a ganhar R$${salarioFinal.toFixed(2).replace('.', ',')}</p>`
}