//COPY by REFERENCE an Mutation
//object 1
const person = {
    name: 'Bob',
    age: 25
}

//Method COPY by REFERENCE with Mutation
const person2 = person      //new link of object
person2.age = 26            //new value object 2
console.log(person2.age)    //print object 2
person.age = 25            //new value object 1
console.log(person.age)    //print object 1


//Method COPY by REFERENCE dont mutation v1
const person3 = Object.assign({},person) // object 2 create from object 1 copy links
person3.age = 26             //new value object 3
console.log(person3.age)    //print object 3
console.log(person.age)    //print object 1

//Method COPY by REFERENCE dont mutation v2
const person4 = {...person} // object 2 create from object 1 copy links
person4.name = 'Alice'          //new value object 4
console.log(person4.name)    //print object 4
console.log(person.name)    //print object 1

//Method COPY by REFERENCE dont mutation v3
const person5 = JSON.parse(JSON.stringify(person))
person5.name = 'Alice'      //new value object 5
console.log(person5.name)    //print object 5
console.log(person.name)    //print object 1
