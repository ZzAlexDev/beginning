//Function

function myFn(a, b) {  //function declaration
    let c           //body function
    a = a + 1       //body function
    c = a + b       //body function
    return c        //return value
}

const z = myFn(10, 3)
//console.log(z)
//console.dir(myFn)



const personOne = {
    name: 'Sanya',
    age: 37
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

//Not recomended
increasePersonAge(personOne)
console.log(personOne.age)

//Recomended

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 1
    return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatePersonOne.age)

