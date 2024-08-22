const btn = document.querySelector('button#btn')
let res = document.querySelector('div#res')

function entrar(){
    let aluno = window.prompt(`Qual e o nome do aluno?`)
    let nota1 = Number(window.prompt(`Primeira nota de ${aluno}:`))
    let nota2 = Number(window.prompt(`Segunda nota de ${aluno}:`))
    let media = (nota1 + nota2) / 2
    

    res.innerHTML += `<p><strong>Analisando a situacao de ${aluno}</strong></p>`

    if(media >= 6){
    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a media e ${media.toFixed(2)}`
    res.innerHTML += `Com media acima 6,0, o aluno esta <strong style = 'color: black; background-color:green;'>APROVADO</strong>`
    } else if(media >= 3){
    res.innerHTML += `<p> Com as notas ${nota1} e ${nota2}, a media e ${media.toFixed(2)}`
    res.innerHTML += `Com media entre 3,0 e 6,0, o aluno esta em <strong style = 'color: black; background-color: yellow;'>RECUPERACAO</strong>`
    } else{
        res.innerHTML += `<p> Com as notas ${nota1} e ${nota2}, a media e ${media.toFixed(2)}`
        res.innerHTML += `Com media abaixo de 3,0 o aluno esta <strong style = 'color: black;background-color: red;'>REPROVADO</strong>`
    }
    
}

   