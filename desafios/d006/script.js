const btn = document.getElementById('btn')
let res = document.getElementById('res')

function calcular(){
    let temperatura = parseFloat(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    res.innerHTML += `<strong>A temperatura de ${temperatura}, corresponde a...</strong>`

    let kelvin = temperatura + 273.15
    let fahrenheit = (temperatura * 9/5) + 32
    res.innerHTML += `<p>${kelvin}K (Kelvin)</p>`
    res.innerHTML += `<p>${fahrenheit}F (Fahrenheit)</p>`
    
    
}



