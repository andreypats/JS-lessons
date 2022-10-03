// 1. Лексическое окружение, рекурсия
//
// const le = {
//     environmentRecords: {    //окружение
//
//     },
//     outer: null              //ссылка на окружение
// }
// { } -> outer


//========== LE CREATED FOR ===========//Лексическое окружение создается для
//
//1.script level
//2.functions
//3.{ } -> blocks


//========= SCRIPT LEVEL ============
//
// { } -> null
// let name; // { name: undefined } -> null
// name = 'Alex'   // { name: 'Alex' } -> null
// name = 'Hanna'   // { name: 'Hanna' } -> null


//========= FUNCTIONS ============
//
// let name = 'Alex'   // globalLE //{ sayHi: Function, name: 'Alex'} -> null
//
// function  sayHi () {
//     // { } -> globalLE
//     name = 'Hanna' // { name = 'Hanna' } -> globalLE
//     console.log ('Hello' + ' ' + name)
// }
//
// // globalLE //{ sayHi: Function, name: 'Alex'} -> null
// sayHi()


// ================= NESTED FUNCTIONS ================//вложенные функции
//
// globalLE { sayHi: Function, name: 'Alex'} -> null
// let name = 'Alex'
//
// function  sayHi () {
//
//     // sayHiLE { greeting: Function, greet: 'Hi'} -> globalLE
//     const greet = 'Hi'
//
//     function greeting () {
//         // greetingLE { } -> sayHiLE
//         console.log (greet + ' ' + name)
//     }
//
//     greeting()
//
// }
//
// sayHi ()


// ================ COUNTER ==============================
//
// // globalLE { counter: Function } -> null
// function  counter () {
//     // [[Environment]] -> globalLE
//     let count = 0
//
//     return () => {
//         console.log (count++)
//     }
// }
//
// const count = counter()  // counterLE { count: 0 } -> globalLE
//                          // [[Environment]] -> counterLE
// count ()                 // {  } -> counterLE
//
// замыкание - способность ФУНКЦИИ запоминать, в каком лексическом окружении ее создали


// 2. РЕКУРСИЯ (Вызов функцией самой себя)
//
// Стек Stack - last in first out -> LIFO
//
// Программный Аппаратный
//
// function pow (x, n) {
//     if (n===1) {                    // ветка базового кейса
//         return x
//     } else {                        // ветка шага рекурсии
//         return x * pow (x, n-1)
//     }
// }
//
// console.log(
//     pow (2,1)   // функция возведения в степень
// )
//
// базовый кейс рекурсии - когда функция перестает выполняться
// шаг рекурсии