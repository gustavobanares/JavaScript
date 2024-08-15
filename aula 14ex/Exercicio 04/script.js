function tabuada(){
    let numero = document.getElementById('txtnumero')
    let res = document.getElementById('res')
    


    if(numero.value.length == 0){
        window.alert('Por favor, digite um numero!')
    } else{
        let n = Number(numero.value)
        let c = 1
        while(c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
    
}