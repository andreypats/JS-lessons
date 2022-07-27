const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const names = ["Bob", "Alex", "Nick", "John"]

const getNames = (array) => {
    const result = []
    //
    const getValueForResult = el => el.name
    //
    for (let i = 0; i < array.length; i++) {
        const newValue = getValueForResult(array[i])
        result[i] = newValue
    }
    return result
}
console.log(getNames(students))


const mapFunction = (array, callback) => {               //map
    const result = []
    //
    for (let i = 0; i < array.length; i++) {
        const newValue = callback(array[i])
        result[i] = newValue
    }
    return result
}
console.log(mapFunction(students, el => el.name))

console.log(students.map(el => el.name))

const filterFunction = (array, callback) => {           //filter
    const result = new Array()
    //
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}
console.log(filterFunction(students, el => el.isMarried === true))


const findFunction = (array, callback) => {             //find

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return array[i]
        }
    }
}
console.log(findFunction(students, el => el.name === "Alex"))


// console.log(students.map(st => {
//     return 'Student ${st.name}: ${st.age} age, ${st.scores} scores. ${st.isMarried ? "Married" : "Not married"}.'
// }))main.js