console.log('Hello World JavaScript')

// console 
console.error('Este é um erro!')
console.warn('Este é um aviso!')
console.log('Esta é uma mensagem!')

// variáveis
var x = 10

// maneiras mais modernas de declarar variáveis
let y = 20 
const z = 7

if (1){
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

// tipos de dados 
const name = 'Gustavo'
console.log(name)
console.log(typeof name)

const shirtsqtd = 7
console.log(shirtsqtd)
console.log(typeof shirtsqtd)

const decimal = 10.8
console.log(decimal)
console.log(typeof decimal)

const isapproved = false // true or false 
console.log(isapproved)
console.log(typeof isapproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = 'Bañares'
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

age = 20
console.log(age)
console.log(typeof age)

// metódos de String 
const fullname = ('Gustavo Bañares')

console.log(fullname.length)

const stringtoArray = fullname.split(' ')

console.log(stringtoArray)

console.log(fullname.toUpperCase())

console.log(fullname.indexOf('Bañares'))

console.log('fhkhffh'.indexOf('Bañares'))

console.log(fullname.slice(0, 7))

// metódos de array
const list = ['a', 'b', 'c','d','e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

console.log(list[list.length - 1])

list.push('g')

console.log(list)

list.pop()

console.log(list)

list.shift()

console.log(list)

list.unshift('a')

console.log(list)

// objetos 

const product = {
    name:'camisa',
    price:20,
    instock:true,
    sizes:['P', 'M', 'G'],
    'main color': 'blue',
}

console.log(product.name)

console.log(product['main color'])

// destructuring

const {price, instock} = product

console.log(price)
console.log(instock)

const[n1, n2] = list

console.log(n1)
console.log(n2)

// JSON - JavaScrpit Object Notation 

const dog = {
    name: 'Bruce',
    age:'7',
}

const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse(json)

console.log(obj)

const jsonerrado = '{"name":"teste", "surname":"testando"}'

const obj2 = JSON.parse(jsonerrado)

console.log(obj2)

// Estruturas condicionais (if and else)
const a = 10

if(a > 8){
    console.log('A é maior que 8')
}

// >, <, >=, <=

const b = 'Gustavo'

if(b === 'Guilherme'){
    console.log('O nome é Guilherme')
}else if (b === 'Bruno'){
    console.log('O nome é Bruno')
} else{
    console.log('Não temos esse nome de usuário')
}

const somenumber = 2

//if ternário 
let testinganumber = somenumber < 20 ? 'Yes' : 'No'

console.log(testinganumber)

// estruturas de repetição - loop
const mylist = [1, 2, 3, 4, 5]
let counter = 0

while(counter < mylist.length){
    console.log('Imprimindo: ' + mylist[counter])
    //counter = counter + 1
    counter++
}

const mysecondlist = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < mysecondlist.length; counter++){
 console.log(`Imprimindo: ${mysecondlist[counter]}`) //template literals
}

// métodos de array -> repetição

const names =  ['Gustavo', 'Guilherme', 'Bruno', 'Danilo']

names.forEach(function (name){
    console.log(`O nome é: ${name}`)
})

const modifiednames = names.map(function (name){
    if( name === 'Gustavo'){
        return (name = 'Sr. Gustavo')
    } else {
        return name
    }
        
})

console.log (modifiednames)

const bignumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number){
    return number >= 5
})

console.log(bignumbers)

const sumall = [10, 20, 30, 40, 50]. reduce(function (total, number){
    return total + number
})

console.log(sumall)

// Funções
function minhafunção(){
    console.log('Olá função')
}

minhafunção()

function nomecompleto(nome, sobrenome){
    return `O nome completo é: ${nome} ${sobrenome}`
}

console.log(nomecompleto('Gustavo', 'Bañares'))
console.log(nomecompleto('Guilherme', 'Santos' ))

const primeironome = 'Danilo'
const segundonome = 'Silva'

const meunomecompleto = nomecompleto(primeironome, segundonome)

console.log(meunomecompleto)


// arrow functions

const myarrowfunction = (a, b) => {
    return a + b
}

console.log(myarrowfunction(2, 5))

const mysimplearrowfuntion = (a, b) => a + b

console.log(mysimplearrowfuntion(7, 10))

// Classes 

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    }
}

const socks = new Product('meias brancas', 12.70)
const shirt = new Product('Camisa Preta', 30.70)

console.log(socks.name)
console.log(socks.price)

console.log(shirt.name)

console.log(shirt.productDetails())

// herança

class superproduct extends Product {
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }

    showadjective(adjective){
        return `O ${this.name} é muito ${adjective}`
    }

    // static
    static sayhello(){
        console.log('Hello')
    }
}

const tenis = new superproduct('Tênis vermelho', 70.7, '40')

console.log(tenis.name)
console.log(tenis.size)

console.log(tenis.showadjective('Lindo'))

superproduct.sayhello()

// DOM - Document Object Model
// Seleção de elementos
const title = document.getElementById('title') // #title

console.log(title)

// query selector 
const sametitle = document.querySelector('#title')

console.log(sametitle)

const texts = document.querySelectorAll('.text')

console.log(texts)
console.log(texts[1])

texts.forEach((text) =>{
    console.log(text.textContent.toUpperCase())
})

// Manipulação de elementos

title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

texts[1].style.backgroundColor = 'pink' // background-color: red

texts[2].classList.add('my-class')

texts[2].classList.remove('text')

texts[3].remove()

// Eventos

const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    texts[2].style.color = 'blue'
})