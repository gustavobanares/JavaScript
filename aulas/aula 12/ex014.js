var agora = new Date()
var diaSem = agora.getDay()

diaSem = 7

/*
    0= Domingo
    1= Segunda
    2= Terca
    3= Quarta
    4= Quinta
    5= Sexta
    6= Sabado
*/



switch(diaSem){
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terca')
        break
    
    case 3:
        console.log('Quarta')

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sabado')
        break
    
    default:
        console.log('[ERROR] Dia invalido!')
        break
    }      