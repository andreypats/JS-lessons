//========= Promise ================
// Promise - это объект, у которого есть свойства (pending, fulfilled, rejected) и методы (then, catch, finally)
//
// const p = {                 //p - promise
//     state: 'pending',       //состояние, статус (pending - ожидание)
//     result: undefined       //результат
// }
//
// const pFulfilled = {        // успешно завершенный promise (resolve)
//     state: 'fulfilled',
//     result: 'some file'
// }
//
// const pRejected = {         // незавершенный promise (reject)
//     state: 'rejected',
//     result: 'some error description'
// }
//
// const promise = new Promise((resolve, reject) => {
// })   //promise может быть выполнен (resolve), либо не выполнен (reject)
//
// promise.then(res)      // метод then, чтобы получить успешный результат (resolve)
//
// promise.catch(err)     // метод catch, чтобы получить отрицательный результат (reject)
//
// promise.finally()     // метод finally, чтобы получить любой результат
//
// promise
//     .then(() => {})
//     .catch(() => {})
//     .finally(() => {})          //цепочка промисов (выполняются последовательно)
//
// const fetchDataWithPromise = (url) => {
//     return new Promise ((res, rej)=>{
//         if (!url) {
//             rej("Url is not defined!")
//         } else {
//             res([{id: 1}])
//         }
//     })
// }
//
// fetchDataWithPromise ("http://vk.com/users")
//     .then ((users)=>{
//         console.log(users)
//     })
//     .then (()=>{
//         return fetchDataWithPromise ("http://vk.com/users/1")
//     })
//     .then ((user)=>{
//         return fetchDataWithPromise ("http://vk.com/users/1/posts")
//     })
//     .then ((posts)=>{
//         return fetchDataWithPromise ("http://vk.com/users/1/posts/4")
//     })
//     //...


// const fetchData = (url, cb) => {
//     if (!url) {
//         cb("Url is not defined!", null)
//     } else {
//         cb(null, [{id: 1}])
//     }
// }
//
//
// fetchData ("http://vk.com/users", (err, data) => {
//     if(err) {
//         throw new Error(e)
//     } else {
//         fetchData ("http://vk.com/users/3", (err, data) => {
//             if(err) {
//                 throw new Error(e)
//             } else {
//                 fetchData ("http://vk.com/users/3/posts", (err, data) => {
//                     if(err) {
//                         throw new Error(e)
//                     } else {
//                         //...
//                     }
//                 })
//             }
//         })
//     }
// })








