const btn = document.getElementById('btn')
let res = document.querySelector('div#res')


let dolar = parseFloat(window.prompt('Antes de mais nada. Quanto esta a cotacao do dolar agora?'))

function calcular(){
    let real = parseFloat(window.prompt('Quantos R$ voce tem na carteira?'))
    let total = real / dolar
    res.innerHTML = `Com R$${real} e o dolar custando U$${dolar}, voce consegue comprar U$${total}!`

}
