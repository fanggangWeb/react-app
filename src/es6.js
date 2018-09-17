// const garett = {
//   name: 'chai',
//   age: 25
// }
// console.log(Object.keys(garett))
// console.log(Object.values(garett))
// console.log(Object.entries(garett))
// const double = x => x * 2
// console.log(double(66))
// function hello (name1, name2) {
//   console.log(name1, name2)
// }
// const arr = ['garett', 'someone']
// hello.apply(null, arr)
// hello(...arr)
// let name = 'cfg'
// const person = {
//   [name]: 'garett',
//   age: 25
// }
// const hob = {
//   book: 'js',
//   tec: 'geek'
// }
// 解构赋值
// console.log({...person,...hob})
// const person = ['garett', 'cfg']
// const person1 = person[0]
// const person2 = person[1]
// let [person1, person2] = person
// console.log(person1, person2)
// const hob = {
//   book: 'js',
//   tec: 'geek'
// }
// const {book, tec} = hob
// console.log(book)
// class 语法糖
// class MyApp {
//   constructor () {
//     this.name = 'garett'
//   }
//   sayHello () {
//     console.log(this.name)
//   }
// }
// const app = new MyApp()
// app.sayHello()
// const arr = [1, 2, 3]
// console.log(arr.map(function (v) {
//   return v*2
// }))
// console.log(arr.every(x => x>0))
// console.log(arr.some(x => x>4))
// console.log(arr.filter(x => x>2))
// console.log(['one', 'two', 'three'].indexOf('two'))
// let arr = [2,4,3,7,5,2,5]
// console.log(...new Set(arr))
// let newArr = new Set(arr)
// let person = [...newArr]
// console.log(person)
const [a, ...b] = [1, 2, 3].reverse()
console.log(`a is ${a}, b is ${b}`)