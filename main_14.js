// ------------- КЛАССЫ ------------------

// Объект
// function  Car (model) {
//     this.model = model
// }
// const car = new Car ('1')

// Класс (это функция)
class Car {

    // определяем свойство класса
    constructor(model) {
        this.model = model
    }

    // определяем метод класса (записывается в prototype)
    showModel () {
        console.log(this.model)
    }
}
// экземпляр классв Car
const car = new Car ('1')


//class

// class Car {
//
//    constructor(model) {
//       this.model = model
//    }
//
//    showModel() {
//       console.log(this)
//      console.log(this.model)
//    }
// }
//
//
// const car = new Car("model 1");
// car.showModel()

//======================  отличия классов от коснтрукторов ===============
//1 !!!Can not call class without new
//2 [[isClassConstructor]]
//3 string representation
//4 class methods not enumerable
// !!!inside class use-strict


// =================== static methods and props =================


// class Car {
//
//   static WHEELS = 4
//
//    showWheels() {
//       console.log(this.WHEELS)
//    }
//
// }
//
// const car = new Car()
//
// car.WHEELS //not working
// car.showWheels() //now working
//
//
// console.dir(Car)


// ================ private fields ==================

// class User {
//     #firstName = "";
//     #lastName = "";
//
//     constructor(firstName, lastName) {
//         this.#firstName = firstName
//         this.#lastName = lastName
//     }
//
//     getFullName() {
//        return this.#firstName + ' ' + this.#lastName
//     }
//
//
//
// }
//
// const user = new User("A", "B")
// user.getFullName()


// ================= get, set ================

// class User {
//     #name = "Hanna"
//
//     get name() {
//         return this.#name
//     }
//
//     set name(value) {
//         this.#name = value
//     }
//
// }


// ================== Наследование ==================
//модификаторы доступа, abstract class, class implements SOmeInterface


class Car {
    #someMethod() {
        console.log("Car")
    }
}


// function Car(model) {}
//
// Car.WHEELS = 4
//
// Car.prototype.showModel = function () {
//     console.log(this.model)
// }
//
// const car = new Car()
//
// function Ford(model) {
//     this.model = model
// }
//
// Ford.prototype.showModel = function () {
//     console.log("From ford")
//     console.log(this.model)
// }
//
// Ford.prototype.__proto__ = Car.prototype
// Ford.__proto__ = Car
//
// console.log(Ford.WHEELS)
//
// const ford = new Ford("Mondeo")
//
// ford.showModel()























