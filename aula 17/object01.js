let amigo = {nome: 'Gustavo', 
    sexo: 'M', 
    peso:'70,7',
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}

amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)