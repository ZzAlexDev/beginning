//Array

const myArray = [1, 2, 3]
console.log(myArray)
//[ 1, 2, 3 ]

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)
//[ 1, 2, 3 ]

const myArray3 = [1, true, 'Sanya']
//  0: 1
//  1: true
//  2: "Sanya"
//  length: 3
//  [[Prototype]]: Array(0)

myArray === myArray2
//false

const myArray4 = myArray
myArray === myArray4
//true


//massive vs object
const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

console.log(myObject)

//
const myArray5 = [1, true, 'S']
console.log(myArray5)           //[ 1, true, 'S' ]
console.log(myArray5[0])        //1
console.log(myArray5[1])        //true
console.log(myArray5[2])        //S
console.log(myArray5.length)    //3

//Length of Massive

const myArray6 = [1, 2, 3, 4]
console.log(myArray6)           //[ 1, 2, 3, 4 ]
console.log(myArray6.length)    //4 - automatic value

myArray6[2] = 'abc'

console.log(myArray6)           //[ 1, 2, 'abc', 4 ]
console.log(myArray6[2])        //'abc'

myArray6[4] = true

console.log(myArray6)           //[ 1, 2, 'abc', 4, true ]
console.log(myArray6.length)    //5 - automatic value

//Method PUSH
const myArray7 = [1, 2, 3]
console.log(myArray7)       //[ 1, 2, 3 ]

myArray7.push(4)

console.log(myArray7)       //[ 1, 2, 3, 4 ]
myArray7.push(true)
console.log(myArray7)       //[ 1, 2, 3, 4, true ]


//Method POP
myArray.pop()
console.log(myArray)                    //[ 1, 2, 3 ]
const removedElement = myArray.pop()    //[ 1, 2 ]
console.log(myArray)                    //[ 1 ]
console.log(removedElement)             //2

//Method UNSHIFT
myArray.unshift(true)
console.log(myArray)                    //[ true, 1 ]
myArray.unshift('abc')
console.log(myArray)                    //[ 'abc', true, 1 ]

//Mtethod SHIFT
myArray.shift()
console.log(myArray)                    //[ true, 1 ]
const removedElement2 = myArray.shift()
console.log(myArray)                    //[ 1 ]
console.log(removedElement2)            //true


//Mtethod forEach
const myArray8 = [1, 2, 3]
console.log(myArray8)                               //[1, 2, 3]
myArray8.forEach(el => console.log(el * 2))         // 2,4,6
console.log(myArray8)                               //[1, 2, 3]

//method MAP
const newArray = myArray8.map(el => el * 3)
const newArray2 = myArray8.map(function (el) {
    return el * 3
})
console.log(myArray8)               //[ 1, 2, 3 ]
console.log(newArray)               //[ 3, 6, 9 ]
console.log(newArray2)               //[ 3, 6, 9 ]

