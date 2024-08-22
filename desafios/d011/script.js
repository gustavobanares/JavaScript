const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function verificar(){
    let ano = Number(window.prompt(`Qual e o ano que voce quer verificar?`))

    res.innerHTML = `<p><strong>Analisando o ano de ${ano}...</strong></p>`

    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        res.innerHTML += `<p>O ano de ${ano} <strong style='color: white; background-color: green;'>E BISSEXTO✅</strong> `
    } else{
        res.innerHTML += `<p>O ano de ${ano} <strong style='color: white; background-color: red;'>NAO E BISSEXTO❌</strong> `
    }
   
}