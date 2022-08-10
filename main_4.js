const todoListID_1 = 'fjfj-548d'
const todoListID_2 = 'sdgv-593f'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    },
]


const tasks = {
    [todoListID_1] : [
        {id: 11, title: 'JS', isDone: false},
        {id: 12, title: 'HTML', isDone: false},
        {id: 13, title: 'CSS', isDone: false},
    ],
    [todoListID_2] : [
        {id: 21, title: 'Beer', isDone: false},
        {id: 22, title: 'Cola', isDone: false},
        {id: 23, title: 'Water', isDone: false},
    ],
}

// console.log(tasks[1].find(t=>t.id === 11))
// console.log([...tasks[1], {id: 14, title: 'LESS', isDone: false}])
// console.log(tasks[1].map(t=>t.id === 12 ? {...t, isDone: true} : t))

console.log([...todoLists, {id: 3, title: 'What to read', filter: 'all'}])
console.log({...tasks, 3: []})

const secretKey = Math.floor(Math.random()*100)  // 0-99

const user = {
    name: 'Bob',
    'user age': 23,
    [secretKey]: 'abracadabra',
}
console.log(user)

//  reduce -> "свёртка"

const numbers = [10, 20, 30]
console.log(numbers.reduce((acc, el) => acc + el, 0)) //найти сумму элементов массива, acc - аккумулятор, el - следующий элемент, 0 - начальное число (необязаиельный параметр)