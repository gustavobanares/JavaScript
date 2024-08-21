const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function calcular(){
    let produto = window.prompt(`Qual o produto que voce esta comprando?`)
    let preco = window.prompt(`Qual e o preco de ${produto}?`)
    conta = 10 * preco
    desconto = conta / 100
    valorFinal = preco - desconto

    res.innerHTML += `<p><strong>Calculando desconto de 10% para ${produto}</strong></p>`
    res.innerHTML += `<p>O preco original era R$${preco}.</p>`
    res.innerHTML += `Voce acaba de ganhar R$${desconto} de desconto (-10%).`
    res.innerHTML += ` No fim, voce vai pagar R$${valorFinal} no produto ${produto}.`
}