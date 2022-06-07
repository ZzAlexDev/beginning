//FOR operator
for (let i = 0; i < 5; i++) {
    console.log(i)
}
//FOR operator in array
const myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
//FOR EACH operator in array
myArray.forEach((Element, index) => { console.log(Element, index) })

//WHILE operator
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

//WHILE operator INFINITY
while (i < 5) {
    console.log(i)
}

i = 0

//DO WHILE operator
do {
    console.log(i)
    i++
} while (i < 5)


//FOR IN operator for Object
const myNewObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myNewObject) {
    console.log(key, myNewObject[key])
}

//FOR EACH operator for Object

Object.keys(myNewObject).forEach(key => { console.log(key, myNewObject[key]) })

Object.values(myNewObject).forEach(value => { console.log(value) })


//FOR IN operator for array
const myArray2 = [true, 10, 'abc', null]
for (const key in myArray2) {
    console.log(myArray2[key])
}


//FOR OF operator for string
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}

//FOR OF operator for array
for (const element of myArray2) {
    console.log(element)
}
