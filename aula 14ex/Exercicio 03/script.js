function contar(){
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else{
        res.innerHTML = 'Contando: '
        inicio = Number(txtini.value)
        fim = Number(txtfim.value)
        passo = Number(txtpas.value)
        if(passo <= 0){
            window.alert('Passo invalido! Considere PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            // Contagem crescente
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} 👉`
            }
        } else{
            // Contagem regressiva
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `🏁`

    }
}