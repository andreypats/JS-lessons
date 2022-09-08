//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
// const repeatString = (str, repNum, separator) => {
//     return (str+separator).repeat(repNum).slice(0, -1);
// }
// console.log(repeatString("yo", 3, ","))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
// const checkStart = (str, start) => {
//     return str.toLowerCase().startsWith(start);
// }
// console.log (checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
// const truncateString = (str, num) => {
//     return str.slice(0, num) + "..."
// }
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
// const getMinLengthWord = (str) => {
//     if (str.length) {
//         let arr = str.split(' ');
//         let word = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             arr[i].length < word.length ? word = arr[i] : word;
//         }
//         return word;
//     } else {
//         return null;
//     }
// }
// console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
// const setUpperCase = (str) => {
//     let arr = str.toLowerCase().split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         let first = arr[i][0].toUpperCase();
//         let end = arr[i].slice(1)
//         arr[i] = first + end
//     }
//     return arr.join(' ')
// }
//
// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, word) => {
    let compare = false;
    for (let i = 0; i < word.length; i++) {
        let temp = false;
        for (let j = 0; j < str.length; j++) {
            if (word[i].toLowerCase() === str[j].toLowerCase()) {
                temp = true;
                break;
            }
        }
        temp ? compare = true : compare = false;
        if (!compare) break;
    }
    return compare;
}

console.log(isIncludes("Incubator", "Cut"))



