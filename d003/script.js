let btn = document.getElementById('btn')

function numero(){
    let numero = Number(window.prompt('Digite um numero inteiro qualquer'))
    let antecessor = numero - 1
    let sucessor = numero + 1
    
    window.alert(`Antes de ${numero}, temos o numero ${antecessor}.
Depois de ${numero}, temos o numero ${sucessor}.`)   
}
