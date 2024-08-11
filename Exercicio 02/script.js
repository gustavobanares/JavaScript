function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Digite uma resposta valida, tente novamente')
    } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //Crianca
            img.setAttribute('src', 'img/foto-bebe-m.jpg')
        } else if(idade < 21){
            //Jovem 
            img.setAttribute('src', 'img/foto-jovem-m.jpg')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'img/foto-adulto-m.jpg')
        } else{
            //Idoso
            img.setAttribute('src', 'img/foto-idoso-m.jpg')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //Crianca
            img.setAttribute('src', 'img/foto-bebe-f.jpg')
        } else if(idade < 21){
            //Jovem 
            img.setAttribute('src', 'img/foto-jovem-f.jpg')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'img/foto-adulto-f.jpg')
        } else{
            //Idoso
            img.setAttribute('src', 'img/foto-idoso-f.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}