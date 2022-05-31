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

