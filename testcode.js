const array = [2, 4, 'nice', 9];
console.log(array);

class Cat {
    constructor(age, cuteIndex) {
        this._age = age;
        this._cuteIndex = cuteIndex;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = 1;
    }
    set cuteIndex(cuteIndex) {
        this._cuteIndex = cuteIndex;
    }
}

const cat = new Cat(4, 10);
cat.age = 2;
const age = cat.age;
console.log(age)
console.log(`Age : ${age} `)