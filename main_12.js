
// =========== THIS ==============
// this - контекст вызова фуекции


//'use-strict' this -> undefined, null, 5, false ....
//!'use-strict' this -> { ? }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//1 Global scope -> global object (window, global)
//2 Arrow functions
//3 Functions (not arrow) -> watch how function called
// - like constructor -> new Function()
// - .call() .bind() .apply()
// - someObject <--- . function()
// - function() // !use-strict this -> window | in use strict this -> undefined


// ==================== GLOBAL SCOPE ====================

// console.log(this)
//
// console.log(this === window)
//
// this.age = 23
//
// console.log(window.age)


// ==================== ARROW FUNCTIONS  ====================

// const foo = () => {
//     console.log(this) // -> Window
// }
//
//
// this.age = 40 //window.age = 40
//
//
// const user = {
//     name: "Alex",
//     age: 26,
//
//     showAge: () => {
//         console.log(this.age)
//     }
// }
//
// user.showAge()


// ==================== FUNCTIONS  ====================

// const user = {
//     name: "Alex",
//     showName() {
//         console.log(this)
//     }
// }
//
// user.showName()
//
// const foo = user.showName
// foo()
//
//
// const hanna = {
//     name: 'Hanna',
//     showName: user.showName
// }
//
// hanna.showName()
//
//
// const car = {
//     run() {
//         console.log(`By ${this}`)
//     }
// }


// ======================= CONSTRUCTORS ===================


// function User() {
//     console.log(this)
// }
//
// const alex = new User()
//
// console.log(alex)

//'use strict';




// const group = {
//     name: 'KMB-40',
//     users: ["Alex", 'Hanna'],
//
//     showUsers() {
//         this.users.forEach(function (user) {
//             console.log(`${this.name}: ${user}`)
//         })
//     }
// }
//
// group.showUsers()
//
//
// const forEach = (cb, thisArgs) => {
//     cb.call(undefined)
// }


















