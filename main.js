// event => e, ev, event
// function => обработчик (handler), слушатель (listener), подписчик (subscriber)
// event => {....} => function (event)

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const clickHandler = (e) => {
    e.stopPropagation()     //остановить дальнейшее выполнение событий
    console.log(e.currentTarget.id)
}

const clickHandler2 = (e) => {
    console.log(e)
}

sm.onclick = clickHandler
// sm.onclick = null

// sm.addEventListener('click', clickHandler)
// sm.addEventListener('click', clickHandler2)
// sm.removeEventListener('click', clickHandler)

const getCurrntTargrtID = (e) => {
    // console.log([...e.path])
    e.stopPropagation()
    alert(e.currentTarget.id)
}

md.addEventListener('click', getCurrntTargrtID)
bg.addEventListener('click', ()=>alert('big'))

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Всем привет')
})