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