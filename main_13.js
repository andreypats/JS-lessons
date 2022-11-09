// prototypes - объект, у которого есть скрытая ссылка на другой объект
// hanna.__proto__ = alex  - объект hanna ссылается на объект alex

function  User () {
    this.name = name
}

User.prototype.showName = function () {
    console.log(this.name)
}

// User.prototype -> { constructor: User }

const alex = new User('Alex')
const hanna = new User('Hanna')



// x.__proto__ ----> xConstructor.prototype