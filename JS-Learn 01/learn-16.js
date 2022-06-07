let val = 10
if (val > 5) {
    val += 20
}
console.log(val)

let val2 = 10
if (val2 < 5) {
    val2 += 20
} else {
    val2 -= 20
}

console.log(val2)


let val3 = 10
if (val3 < 5) {
    val3 += 20
} else if (val3 < 9) {
    val3 -= 20
} else {
    val3 *= 20
}

console.log(val3)


const age = 17
if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}


if (age >= 18) {
    console.log('Is adult')
}
if (age >= 12 && age < 18) {
    console.log('Is teenager')
}
if (age < 12) {
    console.log('Is child')
}

//IF in the function

const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== "number") {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

console.log(sumPositiveNumber(4, 8))


//Swith - Case 

const month = 2
switch (month) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('Yanuar')
        break
    case 2:
        console.log('Februar')
        break
    default:
        console.log('Is not the month of Winter')
}


//ternar operartor

const value1 = 11
const value2 = 25

value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()


let value = 11
console.log(value >= 0 ? value : -value)                        //11

value = 5
const res = value >= 0 ? valuie : -value
console.log(res)                                                //5



