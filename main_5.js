const names = ['Bob', 'Alex', 'Nick', 'John', 102, 'alex', 'Юрий', 'андрей', 100]
console.log(names.sort())


//1. Sort - мутабельно (исходный массив будет изменен)
//2. Sort возвращает исходный массив
//3. Sort работает со строками без доп. параметров
//4. Sort сортирует в порядке таблицы символов Unicod

const numbers = [101, 100, 99, 10000, 11, 8888, -1, 0]
console.log(numbers.sort())

// функция сравнения
// const compareFunc = (a, b) => {
//     if (a<b) {
//         return -1
//     } else {
//         return 1
//     }
//     //return (x<0) - переставляться не будут
//     //return (x>0) - перестановка произойдет
// }

const compareFunc = (a, b) => a - b
// переставляться не будут
// const compareFunc = (a,b) => b-a
// перестановка произойдет


console.log(numbers.sort(compareFunc).reverse())
//numbers.sort(compareFunc).reverse() - reverse переворачивает сортировку

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
console.log(students.sort((a, b) => a.scores - b.scores))   // сортируем по успеваемости
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))   // localeCompare сортирует строки (имеет больше настроек по сравнению с sort)

// bubble sort - пузырьковая сортировка
const nums = [11, 56, 47, 99, 12, 87, 34]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {     // сортируем по возрастанию
        if (nums[i] > nums[i + 1]) {                    // сравниваем 2 соседних числа, работает если первое больше второго
            isSorted = false;
            // let temp = nums[i]                          // создаем временную переменную
            // nums[i] = nums[i + 1]                       // помещаем большее число ближе к концу массива
            // nums[i + 1] = temp                          // на место большего чмсла помещаем меньшее
            [nums[i + 1], nums[i]] = [nums[i],  nums[i + 1]]
        }
    }
    if(isSorted) break
}

console.log(nums)
