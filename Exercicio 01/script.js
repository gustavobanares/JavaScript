function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


msg.innerHTML = `Agora sao ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'img/manha.png'
    document.body.style.background = '#e2a2c2'
} else if(hora >= 12 && hora <18){
    //Boa tarde
    img.src = 'img/tarde.png'
    document.body.style.background = '#67361c'
} else{
    //Boa noite
    img.src = 'img/noite.jpeg'
    document.body.style.background = '#0d203b'
}


}