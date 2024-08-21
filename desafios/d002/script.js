const btn = document.getElementById('btn')

function perguntar(){
    let name = window.prompt(`Qual seu nome? `)
    let idade = window.prompt(`Ola, ${name}! quantos anos voce tem?`)
    window.alert(`Acabei de conhecer ${name}, que tem ${idade} anos de idade! `)
}