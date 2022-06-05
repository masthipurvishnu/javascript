

const testFunction = () => {
    console.log('==============');
    dataTypesMapping(12, 4.32, "is the best palace to learn and coding.")

}
const dataTypesMapping = (secondInteger, secondDecimal, secondString) => {
    const firstInteger = 4
    const firstDecimal = 4.1
    const firstString = "HackerRank"
    console.log(firstInteger + Number(secondInteger));
    console.log(firstDecimal + Number(secondDecimal));
    console.log(firstString + ' ' + secondString);
    console.log(firstString.concat(' ' + secondString));
}
class NotesStore {
    results = {}
    constructor() {
        let state = ['completed', 'active', 'others']
        let name = ''
        let results = { a: 1 }
        // this.addNote(state, 'DrinkTea')
        // this.getNote(state)
    }
    addNote = (state, name) => {
        console.log(state, name);
        this.results[name] = state
        // this.results[state] = name
        console.log(this.results);
    }

    getNote = (state) => {
        Object.keys(this.results).map(item => {
            if (this.results[item] === state) {
                console.log(this.results[item], item);
            }
        })
    }
}

class Car {
    constructor(brand) {
        this._carname = brand
        console.log('from car constructor - ', this._carname);
    }
    set carname(name) {
        console.log('from setter - ', name);
        this._carname = name
    }
    get carname() {
        console.log('from getter - ', this._carname);
        return this._carname
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this._model = mod
        console.log('from model constructor - ', this._model);
    }
    set model(name) {
        console.log('from setter - ', name);
        this._model = name
    }
    get model() {
        console.log('from getter - ', this._model);
        return this._model
    }
}

const testFunction1 = () => {
    console.log('=========CARs=====');
    // let car = new Car('toyota')
    // car._carname = 'lexus'
    // console.log(car._carname);
    // car.carname = 'camry'
    // console.log('my car name is ', car.carname);
    let model = new Model('honda', 'accord')
    console.log(`my current car is ${model.carname} and it's model is ${model.model}`);
    // console.log(model.model);
    let newCar = new Model('toyota', 'lexus')
    newCar.carname = 'toyota1'
    newCar.model = 'lexus1'
    console.log(`my new car is ${newCar.carname} and it's model is ${newCar.model}`);


    // console.log('notes class');
    // let notes = new NotesStore()
    // notes.addNote('active', 'Coffee')
    // notes.addNote('active', 'Mocha')
    // notes.addNote('completed', 'Tea')
    // // notes.getNote('active')
    // notes.getNote('completed')

    //console.log(notes.addNote('completed', 'Tea'));
    // console.log(notes.getNote('completed'));
    // const newArr = addAnElementtoArray([1, 2, 3], 6)
    // console.log(newArr);
}

const addAnElementtoArray = (items, el) => {
    items = {
        a: 1,
        b: 2,
        c: 3
    }
    const ele = 'b'

    console.log('======== el -', items, el);
    // const x = Object.keys(items.filters)
    let newObject = {}

    const x = Object.keys(items).map((el) => {
        if (el === ele) {
            console.log(el);
        } else {
            console.log(el);
            console.log(items[el]);
            newObject[el] = items[el]
            // return newObject
        }
        return el
    })
    console.log('x -', x);
    console.log('newObject -', newObject);
    console.log('items.filter -', Object.keys(items)); // returns true
    // console.log('items after items.includes(2) -', items); // [ 1, 2, 3, 4, 5 ] original array wont change
    console.log('========================');
    items = {
        a: 1,
        b: 2,
        c: 3
    }
    arratFilter(items, 'c')


}

const arratFilter = (items, ele) => {
    let newObj = {}
    // const x = Object.keys(items).map((el, ind) => {
    //     // console.log(el, ind);
    //     if (el != ele) {
    //         console.log(el)
    //         console.log(items[el])
    //         newObj[el] = items[el]
    //         // return { el: items[el] }
    //     }
    // })
    console.log(ele);
    // for (let i in items) {
    //     console.log(i);
    //     if (i === ele) {
    //         delete items[ele]
    //     }
    // }
    delete items[ele]
    console.log('items -', items);

}
const a = () => {
    return 'hello'
}

const sentance = a`hi` // tect templates
console.log(sentance);

/*
template literals => `asdfasfd ${x}.`
Interpolation ${}
*/

function y() {
    console.log('asdfadsf');
    console.log(this.length);
}
var x = {
    length: 5,
    method: function (y) {
        arguments[0]()
    }
}
x.method(y, 1)


export default testFunction