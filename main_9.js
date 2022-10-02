//Лексическое окружение, рекурсия

// const le = {
//     environmentRecords: {    //окружение
//
//     },
//     outer: null              //ссылка на окружение
// }
// { } -> outer


//========== LE CREATED FOR ===========
//
//1.script level
//2.functions
//3.{ } -> blocks


//========= SCRIPT LEVEL ============

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






