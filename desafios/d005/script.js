const btn = document.getElementById('btn')
let res = document.getElementById('res')

function calcular(){
    let medida = parseFloat(window.prompt('Digite uma distancia em metros (m)'))
    res.innerHTML = `<strong>A distancia de ${medida} metros, corresponde a...</strong>`
    
    let quilometro = medida / 1000
    let hectometro = quilometro / 100
    let decametro = hectometro / 10
    let decimetro = decametro * 10
    let centimetro = decimetro * 100
    let milimetro = centimetro * 1000



    res.innerHTML += `<p>${quilometro} quilometros (Km).</p>`
    res.innerHTML += `<p>${hectometro} hectometros (Hm).</p>`
    res.innerHTML += `<p>${decametro} decametros (Dam).</p>`
    res.innerHTML += `<p>${decimetro} decimetros (dm).</p>`
    res.innerHTML += `<p>${centimetro} centimetros (cm).</p>`
    res.innerHTML += `<p>${milimetro} milimetros (mm).</p>`

}