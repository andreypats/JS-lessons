// state -> copyState -> changeCopyState -> use CopyState with changes

let user = { //объект создается в некой ячейке памяти
    name: "Bob",
    age: "23",
    isStudent: true,
    friends: ["Donald", "Joe", "Vlad", "Alex"]
}

// let user2 = user // это не новый объект, а ссылка на объект user
// user2.name = "Alex"

// let user2 = {} // даем команду на создание нового объекта
// user2.name = user.name
// user2.age = user.age
// user2.isStudent = user.isStudent

let user2 = {...user} // даем команду на создание нового объекта и заполняем его данными из user (поверхностная копия)

// let user2 = {...user, isMarried: true} // копируем объект user и добавляем новые свойства

const deepCopyUser = {...user, friends: [...user.friends]} // глубокое копирование (т.к. при поверхностном копировании массив копируется ссылочно)

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]

const newStudents = students.map(st => st.name === "Ann" ? {...st, name: "Joe"} : st) // "Ann" -> "Joe"


