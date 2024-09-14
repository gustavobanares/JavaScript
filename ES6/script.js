// var, let e const

var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++){
    console.log(i)
}

console.log(i)

function logName(){
    const name = 'Gustavo'
    console.log(name)
}

const name = 'Banares'

logName()

console.log(name)

// 2 arrow function

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name){
        return 'Ola ' + name + '!'
    } else {
        return 'Ola!'
    }
}

console.log(greeting('Gustavo'))
console.log(greeting())

const testeArrow = () => console.log('testou')
testeArrow()

const user = {
    name:'Gustavo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username:' +  self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username:' +  this.name)
        }, 700)
    },
}

// user.sayUserName()
// user.sayUserNameArrow()

const comida = {
    nome:'morango',
    sayNome(){
        setTimeout(() =>{
            console.log(this)
            console.log(`Nome:${this.nome}`)
        }, 800)
    },
}

// comida.sayNome()

// 3 filter
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) =>{
    if(n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [{name:'Gustavo', available: true}, {name:'Guilherme', available: false}, {name:'Bruno', available: false}, {name:'Cristiano', available: true}]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

// 4 map
const products = [
    {name:'Camisa', price:10.99, category:'Roupas'},
    {name:'Chaleira Eletrica', price:49.99, category:'Eletro'},
    {name:'Camisa', price:400, category:'Eletro'},
    {name:'Calca jeans', price:50.99, category:'Roupas'},
]

products.map((product) =>{
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)

// 5 template literals
const userName = 'Gustavo'
const age = '20'

console.log(`O nome do usuario e ${userName} e ele tem ${age} anos.`) // Jeito mais pratico
console.log('O nome do usuario e ' + userName + ' e ele tem ' + age + ' anos.')

// 6 destructuring
const fruits = ['Morango', 'Pessego', 'Lichia']

const [f1, f2, f3] = fruits

console.log(f1)

console.log(f2)

const productDetails = {
    name: 'Mouse',
    price: 200.99,
    category: 'Perifericos',
    color: 'Preta',
}

const {name: productName, price: price, category: productCategory, color: color} = productDetails

console.log(`O nome do produto e ${productName}, custa R$${price}, pertence a cateogria ${productCategory} e tem a cor ${color}`)

// 7 spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Spider'}
const carBrand = {brand: 'Ferrari'}
const otherInfos = {km:10000, price:2200000}

const car = {...carName, carBrand, otherInfos, wheels: 4}

console.log(car)

// 8 classe
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Polo', 70)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis azul', 700)

console.log(tenis.productWithDiscount(20))

// 9 heranca
class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log('As cores sao:')
        this.colors.forEach((color) =>{
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapeu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.name)

console.log(hat.productWithDiscount(50))

hat.showColors()