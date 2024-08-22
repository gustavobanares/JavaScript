const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function calcular(){
    let a = window.prompt(`Qual e o valor de a?`)
    let b = window.prompt(`Qual e o valor de b?`)
    let c = window.prompt(`Qual e o valor de c?`)
    resultado = b**2 - 4 * a * c

    res.innerHTML += `<p><strong>A equacao atual e ${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O calculo realizado sera Δ = ${b}² - 4 . ${a} . ${c}`
    res.innerHTML += `<p>O valor calculado foi Δ = ${resultado}`
}