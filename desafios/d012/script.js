const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function verificar(){
    let anterior = Number(window.prompt(`Qual era o preco anterior do produto?`))
    let atual = Number(window.prompt(`Qual e o preco atual do produto?`))
    let subiu = atual - anterior
    let caiu = anterior - atual
    let cima = ((atual - anterior) / anterior) * 100
    let baixo = ((anterior - atual) / anterior) * 100
    
    res.innerHTML = `<p><strong>Analisando os valores informados</strong></p>`
    res.innerHTML += `<p>O produto custava R$${anterior} e agora custa R$${atual}.</p>`
    if(anterior < atual){
        res.innerHTML += '<p>Hoje o produto esta mais caro.</p>'
        res.innerHTML += `<p>O preco subiu R$${subiu.toFixed(2)} em relacao ao preco anterior.</p>`
        res.innerHTML += `<p>Uma variacao de ${cima.toFixed(2)}% pra cima.</p>`
    } else{
        res.innerHTML += '<p>Hoje o produto esta mais barato.</p>'
        res.innerHTML += `<p>O preco caiu R$${caiu.toFixed(2)} em relacao ao preco anterior.</p>`
        res.innerHTML += `<p>Uma varicao de ${baixo.toFixed(2)}% pra baixo.</p>`
    }
}

