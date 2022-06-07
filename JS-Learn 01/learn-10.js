//Function Anonim
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c

}

console.log('myFn(5, 3)', myFn(5, 3))

const myFunction = function (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction(5, 3)
console.log(myFunction(5, 3))


setTimeout(function () { console.log('Delay Message') }, 1000)  //anonim function
setTimeout(() => { console.log('Delay Message №2') }, 1000)     //arrow function


//standart function
function multByFactor(value = 0, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2) //20
multByFactor(5)     //5
multByFactor()      //0 
console.log(multByFactor(10, 2))


//anon function

const myFnAnon = function (value = 0, multiplier = 1) {
    return value * multiplier
}
console.log(myFnAnon(10, 3))

//arrow function
const myFnArrow = (value = 0, multiplier = 1) => { return value * multiplier }
console.log(myFnArrow(10, 4))


